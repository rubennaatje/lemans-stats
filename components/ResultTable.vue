<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="results"
      :items-per-page="60"
      class="elevation-1"
    >
      <template v-slot:item.country="{ item }">
        <CountryFlag :country="item.TeamCtry" size="normal" />
      </template>
    </v-data-table>
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
          sortable: true,
          value: 'Year',
        },
        { text: 'Pos', value: 'Pos' },
        { text: '#', value: 'No' },
        { text: 'Team', value: 'Team' },
        { text: ' ', value: 'country' },
        { text: 'Drivers', value: 'Drivers' },
        { text: 'Chassis', value: 'Chassis' },
        { text: 'Engine', value: 'Engine' },
        { text: 'Laps', value: 'Laps' },
      ],
    }
  },
}
</script>
