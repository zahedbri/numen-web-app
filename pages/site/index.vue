<template>
  <v-container grid-list-md>
    <v-layout column>
      <SiteCard v-for="site in sites" :key="site.id" :site="site" />
    </v-layout>
  </v-container>
</template>

<script>
import SiteCard from '@/components/site/SiteCard.vue'
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Sites'
    }
  },
  components: {
    SiteCard
  },
  computed: mapState({
    sites: state => state.site.sites
  }),
  async fetch({ store }) {
    await store.dispatch('site/fetchSites')
  }
}
</script>
