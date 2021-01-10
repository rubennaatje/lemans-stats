<template>
  <div>
    <v-app>
      <v-data-table
        :headers="headers"
        :items="results"
        :expanded.sync="expanded"
        :items-per-page="100"
        show-expand
        item-key="key"
        class="elevation-1"
      >
        <template #[`item.Team`]="{ item }">
          <span>{{ item.Team }}</span>
          <CountryFlag :country="item.TeamCtry" size="normal" class="fr" />
        </template>

        <template #[`item.driver1`]="{ item }">
          <div v-if="formatDrivers(item)[0]">
            {{ formatDrivers(item)[0].driver }}
          </div>
        </template>

        <template #[`item.driver1country`]="{ item }">
          <div v-if="formatDrivers(item)[0]">
            <CountryFlag
              :country="formatDrivers(item)[0].country"
              size="normal"
            />
          </div>
        </template>
        <template #[`item.driver2`]="{ item }">
          <div v-if="formatDrivers(item)[1]">
            {{ formatDrivers(item)[1].driver }}
          </div>
        </template>
        <template #[`item.driver2country`]="{ item }">
          <div v-if="formatDrivers(item)[1]">
            <CountryFlag
              :country="formatDrivers(item)[1].country"
              size="normal"
            />
          </div>
        </template>

        <template #[`item.driver3`]="{ item }">
          <div v-if="formatDrivers(item)[2]">
            {{ formatDrivers(item)[2].driver }}
          </div>
        </template>

        <template #[`item.driver3country`]="{ item }">
          <div v-if="formatDrivers(item)[2]">
            <CountryFlag
              :country="formatDrivers(item)[2].country"
              size="normal"
            />
          </div>
        </template>

        <template #[`expanded-item`]="{ item }">
          <td :colspan="1">{{ item.Reason }}</td>
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
        { text: 'Driver 1', value: 'driver1' },
        { text: 'Nat', value: 'driver1country' },
        { text: 'Driver 2', value: 'driver2' },
        { text: 'Nat', value: 'driver2country' },
        { text: 'Driver 3', value: 'driver3' },
        { text: 'Nat', value: 'driver3country' },
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
