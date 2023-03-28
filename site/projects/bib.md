---
index: 6
title: 经籍指掌——中国历代典籍目录分析系统
intro: 《经籍指掌——中国历代典籍目录分析系统》是由北京大学数字人文研究中心与中国科学院自然科学史研究所联合研发的一套针对中国历代典籍目录之间类书与书目之间关系的可视化分析系统。项目属于“国家古籍数字化工程专项经费资助项目”。系统对历朝史志目录、《四库全书总目》、《中国古籍总目》等九种代表性官修目录的数据进行标准化处理与书目认同，并利用可视化手段对各目录之间的关系进行呈现。
image: "/images/portfolio/bib4.png"
bg_image: "/images/bg.jpg"
category: "古典目录集成"
link: "https://bib.pkudh.org/"
tags:
  - 古典目录
  - 可视化
  - 古籍书目
colors:
  - "#7073AF"
  - "#CCD6DF"
  - "#FFFFFF"
---

## 项目缘起

古典目录学是研究古典文献的入学之门径。本项目经杨浩老师“以四库总目提要为核心的目录学知识图谱”的提议而立项，曾邀请北京大学《儒藏》中心沙志利研究员讲解古典目录学的基础知识，在讲座中沙老师建议用可视化手段展现古代目录间的演变。2021 年初，杨浩老师调研了《中国历代典籍总目分析系统》等系统，收集整理正史艺文志的目录数据，并交给王凤翔同学清洗。项目起步阶段，北大中古史中心史睿老师提供了许多专业建议和参考文献。

项目初具雏形后，确定由中科院自然史所孙显斌老师主持，组织王凤翔配合中文系黄芷欣、李芃蓓两位同学以人机协作迭代的方式对《汉书·艺文志》等七部史志目录和《四库全书总目提要》的全部数据做题名和责任者的规范和认同，李文琦负责完善可视化方案，王凤翔负责设计和开发软件系统。在孙显斌老师的主持下，项目得到“国家古籍数字化工程专项经费”的资助，数据范围扩大到《中国古籍总目》，由董晨博士、攸兴超老师负责数据加工，软件系统代码经王兆基同学重构，优化了检索和可视化模块、提升了运行效率和交互体验。项目最终于 2022 年 11 月顺利结项并通过验收。

## 项目概要

《经籍指掌——中国历代典籍目录分析系统》是由北京大学数字人文研究中心与中国科学院自然科学史研究所联合研发的一套针对中国历代典籍目录之间类书与书目之间关系的可视化分析系统。项目属于“国家古籍数字化工程专项经费资助项目”。系统对历朝史志目录、《四库全书总目》、《中国古籍总目》等九种代表性官修目录的数据进行标准化处理与书目认同，并利用可视化手段对各目录之间的关系进行呈现。

利用该系统，学者可以方便地对各目录进行检索，直观地查看各目录中书目的分布情况以及各类目的具体收书情况，同时查看与分析目录子类中所收录的具体典籍分类演变情况。该系统在保留古籍目录图书分类和考察学术源流的基础上引入定量分析，不仅可以帮助学者探究古籍目录的分类演化及其背后的学术流衍为核心研究问题，而且借助交互式的可视化分析手段可以支持学者的检索、统计、分析等研究需求。

## 研发背景

古人求学，以目录为途径，明文章之旨趣，晓读书之伦次；古人治学，以目录为利器，辨古书之真伪，考学术之源流。不论求学还是治学，中国历代学者均重视目录的重要功用。清人王鸣盛所言“目录之学，学中第一要紧事”准确道明了目录学在中国学术史上这一不可替代的地位。伴随这一门学问而流传至今的古籍目录，自然也成了今天我们了解和研究中国古代文人精神、学术形式和文化气象的主要入口。

置于现代语境下，目录兼具图书分类和反映学术演变的功能。但古典目录学毕竟延续发展了两千多年，诞生的官私目录无数，这些目录在体例、分类、收书标准、时间跨度甚至用字上也各有差异，在一定程度上为充分实现其功能增加了阻碍。以往仅依靠个人手工的目录学研究或寻一视角，推阐一家或几家的学术脉络，论述一个或几个类目变化，又或总览各目录，定性概括分类异同。

为了实现在全时段、全书目上对古典目录做定量研究的目标，本项目紧扣目录学两种功能，在计算机的辅助下对最具代表性的从汉代到清代的正史目录（包括《汉书•艺文志》、《隋书•经籍志》、《旧唐书•经籍志》、《新唐书•艺文志》、《宋史•艺文志》、《明史•艺文志》、《清史稿•艺文志》）、《四库全书总目》以及《中国古籍总目》九部古籍目录的数据进行深加工，由专业人员手工统一书目与人物的表述，再利用统计及可视化等方法展现类目和书目之间的对应及跨时段的分类演化。

## 系统功能介绍

### 1.书目统计

系统首先提供一个柱状图概览（如图 1），九种目录按照时间顺序从左到右依次排列，不同目录用竖线隔开，目录名下的数字是该目录收书总量，柱状图的横轴上分布着每种目录的一级类，该类下的书目数量用直方柱的高度表示，如此，九种目录各大类及类下书目数量多少一目了然。除了宏观视角的观察，微观的探索也可以在此图上展开。在搜索栏中输入关键词（如图 2），系统会使用模糊匹配算法寻找相关的书籍，将结果返回到柱状图中，这些相关的书分布在哪些目录哪些类下，数量几何十分清楚。并且，所有这些书籍的详细信息都以表格的形式列于结果柱状图之下，可供逐一浏览。

<img style="max-width:60%;display:block;margin:0 auto;" src="/images/portfolio/bib1.png" />

<center>图1. 书目统计概览图</center>

<br />

<img style="max-width:60%;display:block;margin:0 auto;" src="/images/portfolio/bib2.png" />

<center>图2. “孟子”检索结果</center>

<br />

从全局统计图到局部观察的途径不仅只有关键词检索，点击任何一个一级类目的直方柱便可对该类目放大观察查看其下的二级类目及其书目数量。二级类目是数据提供的最底层分类，若继续纵向深入，点击代表二级类的直方柱就可查看该二级类下所有典籍的数据细节。（如图 3）

<img style="max-width:60%;display:block;margin:0 auto;" src="/images/portfolio/bib3.png" />

<center>图3. 类目书籍查询</center>

<br />

### 2.类目演化

我们构建了基于典籍的历时性分类演变轨迹的交互式可视化分析工具（如图 4）。图中的每一个纵轴代表一部目录，纵轴上的坐标点为该目录的二级子类目，每一条线从不同纵轴的某坐标点穿过即展示了一部典籍在每个目录中分别归属于哪个类目，即该典籍的分类演变轨迹，不同的颜色代表从不同目录开始被收录的新生典籍。鼠标指向某一条线并点击，可以查看该条线对应典籍在各目录里的原始著录数据。

<img style="max-width:60%;display:block;margin:0 auto;" src="/images/portfolio/bib4.png" />

<center>图4. 分类演化轨迹</center>

<br />

从微观角度，用户可以通过点击任意纵轴上的坐标点来查看相应目录子类中所收录的具体典籍分类演变（如图 5）；从宏观层面来看，系统还提供了弧形图来整体呈现该类目中的典籍在前代和后代目录中的著录情况，其中线条的粗细反映了出现在其他目录中的典籍占当前类目下典籍总数的比例（如图 6）。

<img style="max-width:60%;display:block;margin:0 auto;" src="/images/portfolio/bib5.png" />

<center>图5. 具体类目的典籍分类演变轨迹</center>

<br />

<img style="max-width:60%;display:block;margin:0 auto;" src="/images/portfolio/bib6.png" />

<center>图6. 分类演化弧形图</center>

<br />

## **团队成员**

**项目负责人：** 王军  
**学术负责人：** 孙显斌  
**产品设计：** 李文琦  
**架构设计：** 王凤翔  
**系统开发：** 王兆基、王凤翔  
**数据生产：** 董晨、攸兴超、黄芷欣、李芃蓓  
**数据处理：** 王凤翔、王兆基

**致谢：**  
感谢北京大学中国古代史研究中心史睿老师在项目初期的支持和指导。

---

## 系统访问和反馈

访问地址：[https://bib.pkudh.org/](https://bib.pkudh.org/)

欢迎使用“经籍指掌”平台，进行中国历代典籍目录查询及典籍分类演变的可视化分析。欢迎与我们交流分析心得。
如果您在操作使用平台过程中有任何意见和建议，遇到任何问题，欢迎来信反馈。

联系方式：[gdhc@pku.edu.cn](mailto:gdhc@pku.edu.cn)，标题可注明：历代目录分析系统反馈。感谢支持！

---

## 成果发表

· Li, W., Wang, F. & Wang, J. (2021). Exploring the Classification of Traditional Chinese Bibliographies through Interactive Visualization. In Proceedings of the ACM/IEEE Joint Conference on Digital Libraries in 2021.

· 李文琦，王凤翔，孙显斌，黄芷欣，李芃蓓.历代史志目录的数据集成与可视化.[J]中国图书馆学报, 2023