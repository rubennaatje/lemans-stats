<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="results"
      :expanded.sync="expanded"
      :items-per-page="100"
      show-expand
      item-key="No"
      class="elevation-1"
    >
      <template v-slot:item.country="{ item }">
        <CountryFlag :country="item.TeamCtry" size="normal" />
      </template>

      <template v-slot:item.Drivers="{ item }">
        <span v-for="driver of formatDrivers(item)" :key="driver.driver">
          {{ driver.driver }}
          <CountryFlag :country="driver.country" size="normal" />
        </span>
      </template>

      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">{{ item.Reason }}</td>
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
      expanded: [],
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
        { text: '', value: 'data-table-expand' },
      ],
    }
  },
  methods: {
    formatDrivers: (item) => {
      const drivers = item.Drivers.split('|')
      const countries = item.DrCtry.split('|')

      return drivers.map((val, index) => ({
        driver: val,
        country: countries[index],
      }))
    },
  },
}
</script>
