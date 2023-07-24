<script setup lang='ts'>
import { useData, withBase } from 'vitepress'
import { isDark, toggleDark } from '../composables/useDark'
import type { Link } from '../types'
const data = useData()
const links = data.site.value.themeConfig.links as Link[]
const siteInfo = data.site.value
</script>

<template>
  <header>
    <a class="title" href="/">
      <div v-if="siteInfo.themeConfig.logo">
        <img v-show="!isDark" class="logo" :src="siteInfo.themeConfig.logo.light" :alt="siteInfo.themeConfig.logo.alt">
        <img v-show="isDark" class="logo" :src="siteInfo.themeConfig.logo.dark" :alt="siteInfo.themeConfig.logo.alt">
      </div>
      <span v-else class="titleText">
        {{ siteInfo.title }}
      </span>
    </a>
    <div class="control">
      <div class="navLine">
        <a v-for="item in links" :key="item.name" class="navItem" :href="withBase(item.link)">
          {{ item.name }}
        </a>
      </div>
      <div class="colorTheme" @click="toggleDark()">
        {{ isDark ? '☀️' : '🌙' }}
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  min-height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.title {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 800;
  color: var(--deep-text);
  height: 3.2rem;
  object-fit: cover;
}

.titleText {
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 800;
  color: var(--deep-text);
}

.control,
.navLine {
  display: flex;
  align-items: center;
  gap: 0 2rem;
  flex-wrap: wrap;
}

.colorTheme {
  font-family: emoji;
  font-size: 2.4rem;
  line-height: 3.2rem;
  cursor: pointer;
  user-select: none;
}

.navItem {
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-text);
  position: relative;
}

.navItem:hover {
  color: var(--deep-text);
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  .control, .navLine {
    justify-content: center;
    gap: 1rem 1rem;
  }

  .control {
    margin-top: 1.6rem;
  }
}
</style>
