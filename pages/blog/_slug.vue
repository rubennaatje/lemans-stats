<template>
  <div>
    <article v-if="article.type === 'normal'" class="mw7-ns center">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <img :src="article.img" :alt="article.alt" />
      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <nuxt-content :document="article" />
      <!-- <author :author="article.author" /> -->
    </article>

    <article v-if="article.type === 'left-right'" class="cf ph3 ph5-ns pv5">
      <header class="fn fl-ns w-50-ns pr4-ns">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">{{ article.title }}</h1>
        <h2 class="f3 mid-gray lh-title">
          {{ article.description }}
        </h2>
        <time class="f6 ttu tracked gray">{{
          formatDate(article.updatedAt)
        }}</time>
        <TableOfContent :toc="article.toc" class="toc" />
      </header>
      <div class="fn fl-ns w-50-ns">
        <nuxt-content :document="article" />
      </div>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 10px;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  box-sizing: border-box;
  line-height: 1.5;
  font-size: 1rem;
  max-width: 30em;
}
.toc {
  margin-top: 25px;
}
</style>
