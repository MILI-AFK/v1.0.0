<!-- ---
layout: home

title: Hl-ui

# titleTemplate: 选项卡描述
editLink: true
lastUpdated: true
hero:
  name: Hl-ui
  text: vue3基础组件
  tagline: Vue3 中基于Element-plus二次封装基础组件文档
  image:
    alt: Hl-ui
  actions:
    - theme: brand
      text: 安装指南
      link: /components/
    - theme: brand
      text: 组件预览
      link: /components/HlButton/base.md
features:
  # - icon: 🔨
  #   title: 实际项目
  #   details: 实际项目中碰到的疑点、难点，致力于更优的自我。。
  - icon: 🧩
    title: 基础组件
    details: 基于Element-plus二次封装；使用组件 Demo 快速体验交互细节。。
  - icon: ✈️
    title: Vue驱动。
    details: 享受 Vue3 + vite3 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
--- -->


<!-- <h1 style="text-align: center;">Thanks to all the contributors!</h1> -->


<div class="title-container">
  <span class="fade-up title ">HiLai-ui</span>
  <span class="fade-up subtitle">Vue3 中基于Element-plus二次封装组件文档</span>
<div class="action-buttons" style="margin-top: 20px;">
  <a :href="withBase('/components/')" class="primary-button">快速开始</a>
  <a :href="withBase('/components/HlButton/base')" class="secondary-button">查看组件</a>
</div>
</div>

<script setup>
import { withBase } from 'vitepress'
</script>
<style>
.title-container {
  width: 1000px;
  text-align: center;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 150px;
  margin: 0;
  font-weight: 700;
}

.subtitle {
  padding:50px 0;
  font-size: 24px;
  margin: 24px 0;

}

.fade-up {
  display: block;
  animation: fadeUpAnimation 1s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeUpAnimation {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


