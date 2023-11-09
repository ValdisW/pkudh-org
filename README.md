# 北京大学数字人文研究中心-官方网站

本站点使用 vuepress1.x 构建，请查阅[官方文档](https://vuepress.vuejs.org/zh/)以了解更多。

## 安装依赖

如果没有安装 NodeJS，需先[安装 NodeJS](https://nodejs.org/en)，然后在本目录下执行以下命令：

```bash
npm i
```

（如果安装了 yarn/pnpm，也可以使用相应命令安装依赖。）

## 启动调试

```bash
npm run dev
```

## 构建

```bash
npm run build
```

## 内容结构说明

```bash
├── ... # 省略其他文件
└── site
    ├── .vuepress
    │   ├── dist # 构建后用于部署到服务器的静态文件
    │   ├── public # 静态资源，一般是图片
    │   ├── theme # 前端主题组件vue代码
    │   └── config.js # 内容相关的配置文件，主要涉及导航、分页等
    ├── member # 实验室成员详情页
    ├── news # 新闻动态详情页
    ├── project # 研究平台详情页
    ├── about.md # 关于我们
    ├── achievements-academic.md # 开放实验室-学术论文
    ├── dissertation.md # 开放实验室-毕业论文
    ├── gujiai.md # 学术活动-古籍智能系列研讨会
    ├── index.md # 首页
    ├── intro.md # 开放实验室-实验室介绍
    ├── lecture-2020.md # 学术活动-学科电子资源讲座2020
    ├── recruitment.md # 招生招聘
    ├── seminar-2020.md # 学术活动-中国历史研究云端国际论坛2020
    ├── topics.md # 开放实验室-科研课题
    └── workshop-2020.md # 学术活动-数字人文工作坊2020
```

## 网站更新方法

Step 1. 在本项目下作出更新后，在命令行中运行`npm run build`执行构建。

Step 2. 构建成功后，项目部署文件位于`site/.vuepress/dist`中，将其上传至 pkudh.org 服务器的相应位置，即可完成更新。

## 常规更新事项

### 新闻动态的更新

中心网站更新常规新闻，需在`/site/news` 目录下添加.md 文件，作为新闻内容载体。

> **Tips:** md 是 Markdown 文件的后缀名。Markdown 文件是一种语法简单的标记语言，可以生成 HTML、PDF、图像、Epub 等常见阅读格式文件。学习 Markdown 语法可访问: http://markdown.p2hp.com/basic-syntax/ （P.S. 本文档也使用了 Markdown 编写）。

需注意，该文件的[frontmatter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)部分，必须包含以下字段（可参考其他文件）：

- title 表示新闻标题
- date 表示新闻发布日期，格式为`yyyy-mm-dd`，时间越晚，在新闻列表中的排序越靠前
- image 表示新闻的封面图地址
- categories 表示分类，尽量从已有的里面选
- tags 表示标签，尽量从已有的里面选

添加后，该新闻页面的访问地址是 `https://pkudh.org/news/yyyy/mm/dd/filename/`，如 https://pkudh.org/news/2023/05/02/camp2023-application/

其中，

- `yyyy` 表示四位数的年份，如 `2023`；
- `mm` 表示两位数的月份，如 `05`；
- `dd` 表示两位数的日期，如 `02`；
- `filename` 表示.md 文件的名称，如 `camp2023-application`。

同时，新闻内容也会在网站首页及新闻动态的目录页( https://pkudh.org/news/ )更新。

### 研究平台的更新

中心网站更新项目平台，需在`site/project`目录下添加.md 文件，作为研究平台的内容载体。

需注意，该文件的[frontmatter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)部分，必须包含以下字段（可参考其他文件）：

- index 项目索引，用于排序，数值越大，位置越靠前
- title 表示研究平台的名称
- intro 研究平台的介绍
- image 研究平台的封面图地址
- categories 表示分类，尽量从已有的里面选
- tags 表示标签，尽量从已有的里面选
- link 表示项目的访问链接

添加后，该平台页面的访问地址是`https://pkudh.org/project/filename/` (`filename`表示.md 文件的名称，如 `wyd`)，如 https://pkudh.org/project/wyd/ 。

同时，研究平台内容也会在研究平台的目录页( https://pkudh.org/projects/ )更新。

### 实验室成员的更新

中心网站更新成员信息，需在`site/member`目录下添加.md 文件，作为成员信息的内容载体。

需注意，该文件的[frontmatter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)部分，必须包含 title 字段，表示成员姓名。

添加后，该平台页面的访问地址是`https://pkudh.org/member/filename.html` (`filename`表示.md 文件的名称，如 `wangjun`)，如 https://pkudh.org/member/wangjun.html 。

添加新成员，并不会在成员目录页(https://pkudh.org/intro.html)中更新，这是为了控制显示（有的成员由于毕业等原因不在实验室，但其md文档还在），因此还需手动更新文件`site/.vuepress/theme/data/members.json`来控制显示。

### 其他页面的更新

其他页面统一放在了`site/`目录下，如毕业论文页对应`site/dissertation.md`。这些页面的安排，在`site/.vuepress/config.js`中配置，该文件主要用于网站整体信息结构的设置，参见: https://vuepress.vuejs.org/zh/config/ 。

### 首页 Banner 部分的更新

首页 Banner 部分，是指官网首页导航栏下方的轮播图组件，用来放置一些重要的新内容。

每张 Banner，都对应了一个`新闻动态`或`研究平台`的页面。如果想把某个页面放在 Banner 中，需要在对应的 md 文件中的[frontmatter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)部分，写好`headline`、`title`、`intro`、`colors`、`image`、`link`这些字段：

- headline 正整数，表示其在轮播图中先后位置的权重，数值越大则越靠前
- title 表示标题文字
- intro 表示介绍文字
- colors 下面三个十六进制颜色数值，顺次表示`文字和按钮的颜色`、`图片外框的颜色`、`卡片背景色`
- image 表示显示的图片的路径
- link 表示点击"访问系统"后跳转的链接
