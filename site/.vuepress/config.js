module.exports = {
  title: "北京大学数字人文研究中心",
  description: "机构官网",
  base: "/",
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
          { text: "毕业论文", link: "/dissertation" },
        ],
      },
      { text: "研究平台", link: "/projects/" },
      {
        text: "学术活动",
        items: [
          { text: "数字人文暑期工作坊2022", link: "https://camp2022.pkudh.org/", target: "_blank", rel: "" },
          { text: "数字人文作品展2022", link: "https://exhibition2022.pkudh.org/", target: "_blank", rel: "" },
          { text: "古籍智能系列研讨会2022", link: "/gujiai" },
          { text: "中国历史研究云端国际论坛2020", link: "/seminar-2020" },
          { text: "数字人文工作坊2020", link: "/workshop-2020" },
          { text: "学科电子资源讲座2020", link: "/lecture-2020" },
        ],
      },
      { text: "招生招聘", link: "/recruitment" },
      { text: "数字人文资源导航", link: "https://nav.pkudh.org/", target: "_blank", rel: "" },
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
            title: "新闻动态",
            dirname: "news",
            path: "/news/",
            itemPermalink: "/news/:year/:month/:day/:slug",
            layout: "NewsIndex",
            pagination: {
              layout: "NewsIndex",
              lengthPerPage: 10,
            },
          },
          {
            id: "projects",
            title: "研究平台",
            dirname: "project",
            path: "/projects/",
            itemPermalink: "/project/:slug",
            layout: "ProjectsIndex",
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tag",
          },
          {
            id: "category",
            keys: ["category", "categories"],
            path: "/category/",
            layout: "Category",
          },
        ],
      },
    ],
  ],
};
