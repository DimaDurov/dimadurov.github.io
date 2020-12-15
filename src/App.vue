<template>
  <div id="app">
    <header>
      <h1 class="site-title">Книга контактов</h1>
      <div id="nav">
        <router-link to="/">Контакты</router-link>
        <router-link to="/about">Обо мне</router-link>
      </div>
    </header>
    <div class="content"><router-view /></div>
  </div>
</template>

<script>
import "./app.scss";

export default {
  name: "App"
};
</script>
<style lang="scss"></style>
