<template>
  <!-- 首页 -->
  <Page type="home">
    <main>
      <Banner :banner_list="bnl" />

      <!-- 新闻 -->
      <section id="news">
        <h2>新闻动态</h2>
        <ul class="latest-news-list">
          <li v-for="n in latest_news">
            <a :href="n.path">
              <img :src="n.frontmatter.image" />
              <p class="title" v-text="n.title"></p>
              <p class="date">
                {{
                  new Date(n.frontmatter.date).toLocaleDateString("zh-CN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                }}
              </p>
            </a>
          </li>
        </ul>
      </section>

      <!-- 研究方向 -->
      <section id="dir">
        <h2>研究方向</h2>
        <ul>
          <li v-for="e in research_direction" :key="e.name">
            <div :style="`background: #efefef url(${e.icon}) no-repeat center/60%`"></div>
            <span v-text="e.name"></span>
          </li>
        </ul>
      </section>
    </main>
  </Page>

  <!-- <div id="home">
    <Nav />
    <canvas :width="canvas_width" :height="canvas_height" ref="canvas"></canvas>
    <Content />
    <Footer />
  </div> -->
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Page from "../components/Page.vue";

import Banner from "../components/Banner.vue";

import * as THREE from "three";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { DotScreenShader } from "three/examples/jsm/shaders/DotScreenShader.js";

export default {
  name: "Layout",
  components: {
    Nav,
    Page,
    Footer,
    Banner,
  },
  data() {
    return {
      // canvas_width: window.innerWidth,
      // canvas_height: 500,
      // scene: null,
      // camera: null,
      // renderer: null,
      // composer: null,
      // frame_count: 0,
      // logo: null,

      latest_news: [],

      bnl: [],

      research_direction: [
        { name: "数字人文", icon: "./images/researchdirection/mulu.svg" },
        { name: "古籍智能", icon: "./images/researchdirection/process.svg" },
        { name: "知识图谱", icon: "./images/researchdirection/zhishitupu.svg" },
        { name: "用户行为", icon: "./images/researchdirection/renwu.svg" },
        { name: "文化计算", icon: "./images/researchdirection/gis.svg" },
      ],
    };
  },
  methods: {
    // init_basis() {
    //   this.scene = new THREE.Scene();
    //   this.scene.background = new THREE.Color("#F0F5F9");
    //   this.scene.fog = new THREE.Fog(0x050505, 2000, 3500);
    //   this.camera = new THREE.PerspectiveCamera(75, this.canvas_width / this.canvas_height, 1, 10000);
    //   this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, antialias: true });
    //   this.camera.position.set(0, 0, 600);
    // },
    // init_old() {
    //   // 滤镜
    //   // this.composer = new EffectComposer(this.renderer);
    //   // this.composer.addPass(new RenderPass(this.scene, this.camera));
    //   // const effect1 = new ShaderPass(DotScreenShader);
    //   // effect1.uniforms["scale"].value = 14;
    //   // // this.composer.addPass(effect1);
    //   // const effect2 = new ShaderPass(RGBShiftShader);
    //   // effect2.uniforms["amount"].value = 0.0025;
    //   // this.composer.addPass(effect2);
    // },
    // particles(number, size) {
    //   const particles = number;
    //   const geometry = new THREE.BufferGeometry();
    //   const arrayBuffer = new ArrayBuffer(particles * 16); // 存储点的全部信息
    //   // 两个数组共享同一个存储空间。
    //   // 共享方式为：以16个字节为单位，表示点的位置和颜色。
    //   // 前12个字节为float32类型(一个数字用4字节表示)，表示点的位置(x,y,z)。
    //   // 后4个字节为uint8类型(一个数字用1字节表示)，表示点的颜色(r,g,b,a)。
    //   const interleavedFloat32Buffer = new Float32Array(arrayBuffer);
    //   const interleavedUint8Buffer = new Uint8Array(arrayBuffer);
    //   const color = new THREE.Color();
    //   const n = 1000,
    //     n2 = n / 2; // particles spread in the cube
    //   for (let i = 0; i < interleavedFloat32Buffer.length; i += 4) {
    //     let x = Math.random() * n - n2;
    //     let y = Math.random() * n - n2;
    //     let z = Math.random() * n - n2;
    //     // 前12字节，计算位置
    //     interleavedFloat32Buffer[i + 0] = x; // x
    //     interleavedFloat32Buffer[i + 1] = y; // y
    //     interleavedFloat32Buffer[i + 2] = z; // z
    //     // 后4字节，计算颜色
    //     const vx = x / n + 0.5;
    //     const vy = y / n + 0.5;
    //     const vz = z / n + 0.5;
    //     color.setRGB(vx, vy, vz);
    //     const j = (i + 3) * 4;
    //     interleavedUint8Buffer[j + 0] = color.r * 255;
    //     interleavedUint8Buffer[j + 1] = color.g * 255;
    //     interleavedUint8Buffer[j + 2] = color.b * 255;
    //     interleavedUint8Buffer[j + 3] = 0; // not needed
    //   }
    //   const interleavedBuffer32 = new THREE.InterleavedBuffer(interleavedFloat32Buffer, 4);
    //   const interleavedBuffer8 = new THREE.InterleavedBuffer(interleavedUint8Buffer, 16);
    //   geometry.setAttribute("position", new THREE.InterleavedBufferAttribute(interleavedBuffer32, 3, 0, false));
    //   geometry.setAttribute("color", new THREE.InterleavedBufferAttribute(interleavedBuffer8, 3, 12, true));
    //   // material
    //   const material = new THREE.PointsMaterial({ size: size, vertexColors: true });
    //   return new THREE.Points(geometry, material);
    // },
    // init() {
    //   this.init_basis();
    //   // this.scene.add(this.particles(1e5, 20));
    //   let points = this.brand();
    //   this.scene.add(points);
    //   // renderer
    //   this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, antialias: true });
    //   this.renderer.setPixelRatio(window.devicePixelRatio);
    //   this.renderer.setSize(this.canvas_width, this.canvas_height);
    // },
    // vertexMesh(target_geo, material) {
    //   let position_arr = target_geo.attributes.position.array;
    //   let geometry = new THREE.BufferGeometry();
    //   geometry.setAttribute("position", new THREE.BufferAttribute(position_arr, 3));
    //   return new THREE.Points(geometry, material);
    // },
    // brand() {
    //   let logo = new THREE.Group();
    //   const sprite = new THREE.TextureLoader().load("../../circle.png");
    //   // 添加形状1
    //   let left_geo = new THREE.BoxGeometry(100, 400, 80, 10, 40, 10); // 参照模型
    //   let left_mat = new THREE.PointsMaterial({
    //     size: 8,
    //     map: sprite,
    //     color: "#004098",
    //     alphaTest: 0.5,
    //     transparent: true,
    //   });
    //   let left_points = this.vertexMesh(left_geo, left_mat);
    //   left_points.position.set(-300, 0, 0);
    //   logo.add(left_points);
    //   // 添加形状2
    //   const middle_shape = new THREE.Shape();
    //   middle_shape.moveTo(0, 400);
    //   middle_shape.bezierCurveTo(0, 400, 200, 400, 200, 200);
    //   middle_shape.bezierCurveTo(200, 200, 200, 0, 0, 0);
    //   middle_shape.lineTo(0, 100);
    //   middle_shape.bezierCurveTo(0, 100, 100, 100, 100, 200);
    //   middle_shape.bezierCurveTo(100, 200, 100, 300, 0, 300);
    //   const extrudeSettings = {
    //     steps: 2,
    //     depth: 16,
    //     bevelEnabled: true,
    //     bevelThickness: 20,
    //     bevelSize: 0,
    //     bevelOffset: 0,
    //     bevelSegments: 1,
    //   };
    //   const middle_geo = new THREE.ExtrudeGeometry(middle_shape, extrudeSettings);
    //   const middle_mat = new THREE.PointsMaterial({
    //     size: 8,
    //     map: sprite,
    //     color: "#fdd000",
    //     alphaTest: 0.5,
    //     transparent: true,
    //   });
    //   let middle_points = this.vertexMesh(middle_geo, middle_mat);
    //   middle_points.position.set(-200, -200, 0);
    //   logo.add(middle_points);
    //   // 添加形状3
    //   const right_shape = new THREE.Shape();
    //   right_shape.moveTo(100, 400);
    //   right_shape.lineTo(200, 400);
    //   right_shape.lineTo(200, 0);
    //   right_shape.lineTo(100, 0);
    //   right_shape.lineTo(100, 150);
    //   right_shape.lineTo(0, 150);
    //   right_shape.lineTo(0, 250);
    //   right_shape.lineTo(100, 250);
    //   const right_geo = new THREE.ExtrudeGeometry(right_shape, extrudeSettings);
    //   const right_mat = new THREE.PointsMaterial({
    //     size: 8,
    //     map: sprite,
    //     color: "#004098",
    //     alphaTest: 0.5,
    //     transparent: true,
    //   });
    //   let right_points = this.vertexMesh(right_geo, right_mat);
    //   right_points.position.set(20, -200, 0);
    //   logo.add(right_points);
    //   return logo;
    // },
    // animate() {
    //   requestAnimationFrame(this.animate);
    //   // this.camera.position.set(800 * Math.cos(this.frame_count), 300, 800 * Math.sin(this.frame_count));
    //   // this.camera.lookAt(0, 0, 0);
    //   // this.logo.position.y = 100 * Math.sin(this.frame_count)
    //   this.renderer.render(this.scene, this.camera);
    //   // this.composer.render();
    //   this.frame_count += 0.02;
    // },
  },
  created() {
    let news = this.$site.pages.filter((e) => e.id == "news");
    news.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
    this.latest_news = news.slice(0, 5);

    // 选择项目，加入banner列表
    let projects = this.$site.pages.filter((e) => e.id == "projects");
    projects.sort((a, b) => b.frontmatter.index - a.frontmatter.index);
    console.log(projects);
    this.bnl = projects.slice(0, 7).map((e) => {
      return {
        pic_url: e.frontmatter.image,
        link_url: e.path,
        title: e.frontmatter.title,
        intro: e.frontmatter.intro,
        description: e.frontmatter.title,
        link: e.frontmatter.link,
        colors: e.frontmatter.colors,
      };
    });

    // this.init();
    // this.animate();
  },
};
</script>

<style lang="less" scoped>
img {
  max-width: 100%;
}
main {
  min-height: 100vh;
  #news {
    .latest-news-list {
      display: flex;
      list-style: none;
      justify-content: center;
      li {
        width: 10rem;
        padding: 1rem;
        transition: 0.2s;
        &:hover {
          background: #f5f5f5;
        }
        a {
          text-decoration: none;
          display: block;

          img {
            width: 100%;
            height: 6rem;
            object-fit: cover;
          }
          p {
            text-decoration: none;
            color: #000;
          }
          p.title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin: 0.3rem 0;
            letter-spacing: 0.02rem;
          }
          p.date {
            font-size: 0.6rem;
            color: #999;
          }
        }
      }
    }
  }
  section {
    padding: 4rem 0;
    h2 {
      text-align: center;
      font-weight: normal;
      margin: 0 0 2rem;
    }
  }
  #dir {
    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      li {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          margin: 0 0 0.4rem;
        }
      }
    }
  }
}
</style>
