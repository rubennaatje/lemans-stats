<template>
  <div>
    <section class="mw7 center">
      <h1 class="athelas ph3 ph0-l">Blog Posts</h1>

      <article
        v-for="article of articles"
        :key="article.slug"
        class="pv4 bt bb b--black-10 ph3 ph0-l"
      >
        <div class="flex flex-column flex-row-ns">
          <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 class="f3 athelas mt0 lh-title">
              {{ article.title }}
            </h1>
            <p class="f5 f4-l lh-copy athelas">
              {{ article.description }}
            </p>
          </div>
          <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              :src="'lemans-stats/' + article.img"
              class="db"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
        </div>
        <p class="f6 lh-copy gray mv0">
          By
          <span class="ttu">{{
            article.author ? article.author.name : 'unknown'
          }}</span>
        </p>
        <time class="f6 db gray">{{ formatDate(article.updatedAt) }}</time>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
