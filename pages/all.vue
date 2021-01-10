<template>
  <div>
    <ResultTable :results="articles" />
  </div>
</template>

<script>
export default {
  static: {
    prefix: false,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('data', 'results_in')
      //   .only(['title', 'description', 'img', 'slug', 'author'])
      //   .sortBy('createdAt', 'asc')
      .fetch()
    // console.log(articles.body)
    return {
      articles: articles.body.map((val) => ({
        ...val,
        key: `${val.No} ${val.Year}`,
      })),
    }
  },
}
</script>
