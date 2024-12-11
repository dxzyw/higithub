import fs from 'fs';
import dayjs from 'dayjs';
import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import { parse } from 'node-html-parser';
import { SITE } from './src/config';
import rehypeCustomizeImageSrc from './rehype-customize-image-src.js';



const DEFAULT_FORMAT = 'YYYY/MM/DD';
const WEEKLY_REPO_NAME = 'dxzyw/weekly';
const START_DATE = '2022-10-10';

function formatDate(date) {
	return dayjs(date).format(DEFAULT_FORMAT);
}

function getFileCreateDate(filePath) {
	return formatDate(fs.statSync(filePath).birthtime);
}

function getWeeklyDate(num) {
	return num < 100
		? formatDate(dayjs(START_DATE).subtract(100 - num, 'week'))
		: getFileCreateDate(filePath);
}

function getTwitterImage(num) {
	return num >= 110 ? `https://herotops.xyz/assets/${num}.jpg` : undefined;
}

function defaultLayoutPlugin() {
	return function (tree, file) {
		const filePath = file.history[0];
		const { frontmatter } = file.data.astro;
		frontmatter.layout = '@layouts/post.astro';

		if (tree.children[0]?.value && !frontmatter.pic) {
			const imageElement = parse(tree.children[0].value).querySelector('img');
			frontmatter.pic = imageElement.getAttribute('src');
		}

		if (tree.children[1]?.children[1]?.value) {
			frontmatter.desc = tree.children[1].children[1].value;
		}

		frontmatter.desc = frontmatter.desc || SITE.description;
		frontmatter.pic = frontmatter.pic || SITE.pic;

        if (!frontmatter.date) {
            let postNumber = '0';
            if (filePath) {
                if (filePath.includes('/posts/')) {
                    const parts = filePath.split('/posts/')[1].split('-');
                    postNumber = parts.length > 0 ? parts[0] : '0';
                } else if (filePath.includes('/daily_article/')) {
                    const parts = filePath.split('/daily_article/')[1].split('-');
                    postNumber = parts.length > 0 ? parts[0] : '0';
                }
            }
            frontmatter.date = SITE.repo === WEEKLY_REPO_NAME
                ? getWeeklyDate(postNumber)
                : getFileCreateDate(filePath);
        }

        if (SITE.repo === WEEKLY_REPO_NAME) {
            let postNumber = '0';
            if (filePath) {
                if (filePath.includes('/posts/')) {
                    const parts = filePath.split('/posts/')[1].split('-');
                    postNumber = parts.length > 0 ? parts[0] : '0';
                } else if (filePath.includes('/daily_article/')) {
                    const parts = filePath.split('/daily_article/')[1].split('-');
                    postNumber = parts.length > 0 ? parts[0] : '0';
                }
            }
            frontmatter.twitterImg = getTwitterImage(postNumber);
        }
	};
}

async function generateSitemap() {
    try {
        const urls = [];
        const contentDir = './src/content';
        
        console.log('Starting sitemap generation...');
        console.log('Content directory:', contentDir);

        // 添加首页
        urls.push({
            loc: SITE.website,
            lastmod: formatDate(new Date()),
            changefreq: 'daily',
            priority: '1.0'
        });

        // 遍历内容目录
        for (const type of ['posts', 'daily_article']) {
            const dirPath = `${contentDir}/${type}`;
            console.log(`Checking directory: ${dirPath}`);

            if (!fs.existsSync(dirPath)) {
                console.log(`Directory not found: ${dirPath}`);
                continue;
            }

            const files = fs.readdirSync(dirPath)
                .filter(file => file.endsWith('.md'));
            
            console.log(`Found ${files.length} files in ${type}`);

            for (const file of files) {
                const filePath = `${dirPath}/${file}`;
                const stats = fs.statSync(filePath);
                const urlPath = `/${type}/${file.replace('.md', '')}`;
                
                urls.push({
                    loc: `${SITE.website}${urlPath}`,
                    lastmod: formatDate(stats.mtime),
                    changefreq: 'weekly',
                    priority: '0.8'
                });
            }
        }

        // 生成 sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(entry => `    <url>
        <loc>${entry.loc}</loc>
        <lastmod>${entry.lastmod}</lastmod>
        <changefreq>${entry.changefreq}</changefreq>
        <priority>${entry.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

        // 确保输出目录存在
        const publicDir = './dist';
        if (!fs.existsSync(publicDir)) {
            console.log(`Creating directory: ${publicDir}`);
            fs.mkdirSync(publicDir, { recursive: true });
        }

        // 写入文件
        const outputPath = `${publicDir}/sitemap.xml`;
        fs.writeFileSync(outputPath, sitemap);
        console.log(`✨ Sitemap generated successfully at: ${outputPath}`);
        
        // 输出生成的URL数量
        console.log(`Total URLs in sitemap: ${urls.length}`);

    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

export default defineConfig({
	prefetch: true,
	integrations: [
        tailwind(),
        {
            name: 'sitemap-generator',
            hooks: {
                'astro:build:done': async () => {
                    await generateSitemap();
                },
            },
        },
    ],
	markdown: {
			remarkPlugins: [defaultLayoutPlugin],
				rehypePlugins: [rehypeCustomizeImageSrc],
	},

});



