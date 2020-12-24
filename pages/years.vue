<template>
  <div>
    <YearsTable :years="articles.body" />
  </div>
</template>

<script>
export default {
  static: {
    prefix: false,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('data', 'races').fetch()

    return {
      articles,
    }
  },
}
</script>
