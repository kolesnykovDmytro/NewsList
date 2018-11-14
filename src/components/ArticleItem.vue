<template>
  <article class="article-item">
    <header class="article-item__header">
      <h1>{{article.title}}</h1>
      <p v-if="article.author">
          By <span>{{article.author}}</span>
      </p>
    </header>
    
    <section class="article-item__content">
      <p class="article-item__description">
        {{article.description}}
      </p>
      <ImageItem
        class="article-item__image"
        v-if="article.urlToImage"
        :source="article.urlToImage"
      />
    </section>

    <footer class="article-item__footer">
      <a :href="article.url" class="footer-link">Details</a>
    </footer>
  </article>
</template>

<script>
import ImageItem from "./ImageItem";

export default {
  components: {
    ImageItem
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.article-item {
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px #c0c0c0;
  margin-bottom: 20px;
  &__header {
    margin-bottom: 1%;
    text-align: center;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  &__description {
    font-size: 14px;
    width: 49%;
    margin-right: 1%;
    flex-grow: 1;
    min-width: 200px;
  }

  &__image {
    width: 50%;
    flex-grow: 1;
  }

  &__footer {
    margin-top: 15px;
    .footer-link {
      display: block;
      padding: 5px;
      max-width: 160px;
      margin: 0 auto;
      text-decoration: none;
      border: 1px solid #1976d2;
      text-align: center;
    }
  }
}
</style>
