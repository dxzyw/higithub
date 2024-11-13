// Helper function to extract and decode the title part from the URL
//const extractTitlePart = (currentPage: string) => {
 // return decodeURIComponent(currentPage.split('/posts/')[1]);
//};



const extractTitlePart = (currentPage: string) => {
  // 使用 split 方法分割路径
  const parts = currentPage.split('/'); // 按照 '/' 分割路径
  // 检查是否有足够的部分
  if (parts.length > 2) {
    return decodeURIComponent(parts[2]); // 返回第二级目录的内容
  }
  // 如果没有足够的部分，返回空字符串或抛出错误
  return '';
};

// Convert to title
export const parseTitle = (currentPage: string) => {
  const oldTitle = extractTitlePart(currentPage);
  let title = `第${oldTitle.split('-')[0]}期 - ${oldTitle.split('-')[1]}`;
  if (title.endsWith('/')) {
    title = title.slice(0, -1);
  }
  return title;
};

// Get the current article number.
export const getIndex = (currentPage: string) => {
  const oldTitle = extractTitlePart(currentPage);
  return parseInt(oldTitle.split('-')[0]);
};

// Sort all articles.
export const sortPosts = (allPosts: any) => {
  return allPosts.sort((a, b) => {
    const getIndexFromUrl = (url: string) => parseInt(extractTitlePart(url).split('-')[0]);
    return getIndexFromUrl(a.url) - getIndexFromUrl(b.url);
  });
};
