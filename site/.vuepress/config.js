module.exports = {
  title: "北京大学数字人文研究中心",
  description: "机构官网",
  base: "/",
  //markdown: {
  //  lineNumbers: false, // 代码块显示行号
  //},
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "新闻动态", link: "/news/" },
      {
        text: "开放实验室",
        items: [
          { text: "实验室介绍", link: "/intro" },
          { text: "科研课题", link: "/topics" },
          { text: "学术论文", link: "/achievements-academic" },
          { text: "毕业论文", link: "/achievements-degree" },
        ],
      },
      { text: "研究平台展示", link: "/projects/" },
      {
        text: "学术活动",
        items: [
          { text: "数字人文暑期工作坊2022", link: "/test.html" },
          { text: "数字人文作品展2022", link: "/" },
          { text: "古籍智能系列研讨会2022", link: "/gujiai" },
          { text: "中国历史研究云端国际论坛2020", link: "/seminar" },
          { text: "数字人文工作坊2020", link: "/plan" },
          { text: "学科电子资源讲座2020", link: "/lecture" },
        ],
      },
      { text: "招生招聘", link: "/recruitment" },
      { text: "数字人文资源导航", link: "http://nav.pkudh.org/" },
      { text: "关于我们", link: "/about" },
    ],
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "news",
            dirname: "news",
            path: "/news/",
            itemPermalink: "/news/:year/:month/:day/:slug",
            layout: "NewsIndex",
            pagination: {
              lengthPerPage: 8,
            },
          },
          {
            id: "projects",
            dirname: "projects",
            path: "/projects/",
            layout: "ProjectsIndex",
            // pagination: {
            //   lengthPerPage: 8,
            // },
          },
        ],
      },
    ],
  ],
};
