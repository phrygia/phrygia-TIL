const dirTree = require("directory-tree");
const path = require("path");

const util = (module.exports = {
  getFiles: (name) => {
    let files = [];
    dirTree(
      path.join(__dirname, "../" + name),
      { extensions: /\.md/ },
      (item, PATH) => files.push(item)
    );
    return files;
  },
  getArticles: (name, except) => {
    let articles = [];
    const root_dirname = path.join(__dirname, "../");
    let files = util.getFiles(name);
    files.forEach((item) => {
      if (except !== undefined && item.path.includes(except)) return;
      articles.push(
        item.path
          .replace(root_dirname, "/")
          .replace(".md", "")
          .replace("README", "")
      );
    });
    return articles;
  },
});
