<template>
  <div>
    <h1>Blog Posts</h1>
    <!-- <pre> {{ articles }}</pre> -->
    <ul>
      <!-- <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li> -->
    </ul>
    <v-tabs>
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>
    <ResultTable :results="articles.body" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('data', 'results_in')
      //   .only(['title', 'description', 'img', 'slug', 'author'])
      //   .sortBy('createdAt', 'asc')
      .fetch()
    // console.log(articles.body)

    return {
      articles,
    }
  },
}
</script>
