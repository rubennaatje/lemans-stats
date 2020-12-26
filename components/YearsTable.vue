<template>
  <div>
    <v-app>
      <v-data-table
        :headers="headers"
        :items="years"
        :items-per-page="120"
        class="elevation-1"
      >
        <template #[`item.actions`]="{ item }">
          <nuxt-link :to="'/results/' + item.Id">See results</nuxt-link>
        </template>
        <template #[`item.Cancelled`]="{ item }">
          <div v-if="item.Cancelled !== '0'">Yes</div>
          <div v-else>No</div>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>
<script>
export default {
  static: {
    prefix: false,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['years'],
  data() {
    return {
      headers: [
        {
          text: 'Year',
          align: 'start',
          sortable: true,
          value: 'Id',
        },
        { text: 'Event date', value: 'Event_date' },
        { text: 'Start time', value: 'Start_time' },
        { text: 'Cancelled', value: 'Cancelled' },
        { text: 'Cancellation reason', value: 'Cancellation_reason' },
        { text: 'Distance', value: 'Distance_km' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
}
</script>
