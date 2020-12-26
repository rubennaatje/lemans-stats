<template>
  <div>
    <prev-next :prev="prev" :next="next" />
    <ResultTable :results="articles.body" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('data', 'years', params.year)
      //   .where({ body: { Year: 1999 } })
      //   .only(['title', 'description', 'img', 'slug', 'author'])
      //   .sortBy('createdAt', 'asc')
      .fetch()
    // console.log(articles.body)
    const [prev, next] = await $content('data', 'years')
      .only(['year', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.year)
      .fetch()

    return {
      articles,
      prev,
      next,
    }
  },
}
</script>

<style scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
