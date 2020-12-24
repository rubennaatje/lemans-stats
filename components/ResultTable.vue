<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="results"
      :items-per-page="30"
      class="elevation-1"
    ></v-data-table>
    <!-- <pre> {{ results }}</pre> -->
  </div>
</template>
<script>
export default {
  static: {
    prefix: false,
  },
  props: ['results'],
  data() {
    return {
      headers: [
        {
          text: 'Year',
          align: 'start',
          sortable: false,
          value: 'Year',
        },
        { text: 'Calories', value: 'Pos' },
        { text: 'Fat (g)', value: 'Team' },
        { text: 'Carbs (g)', value: 'Drivers' },
        { text: 'Protein (g)', value: 'Chassis' },
        { text: 'Iron (%)', value: 'Engine' },
      ],
      desserts: [],
    }
  },
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
