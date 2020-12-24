<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="years"
      :items-per-page="120"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <nuxt-link :to="'/results/' + item.Id">See results</nuxt-link>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  static: {
    prefix: false,
  },
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
