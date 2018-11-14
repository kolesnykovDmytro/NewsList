<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <ArticlesList />
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import ArticlesList from "./components/ArticlesList";
import AppFooter from '@/components/AppFooter';

export default {
  name: "App",
  components: {
    ArticlesList,
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.v-content {
  margin-top: 20px;
}
</style>
