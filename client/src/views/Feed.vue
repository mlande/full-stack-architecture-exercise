<template>
    <div class="feed">
        <h2> Here are all the articles:</h2>
        <section class="section">
            <article-box v-for="(article, i) in articles" :key="i" :author="article.author" :title="article.title" :content="article.content" />
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import ArticleBox from "@/components/ArticleBox.vue";
import { getAllArticles } from "@/apiHandler";

export default {
  name: "feed",
  components: {
    ArticleBox
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    getAllArticles().then(a => {
      this.articles = a;
    });
  }
};
</script>
