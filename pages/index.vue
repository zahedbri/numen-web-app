<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="344"
          >
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            />
            <v-card-title>
              <div>
                <span class="headline">Cafe Badilico</span>
                <div class="d-flex">
                  <v-rating
                    :value="value"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  />
                  <div class="ml-2 grey--text text--darken-2">
                    <span>{{ value }}</span>
                    <span>({{ reviews }})</span>
                  </div>
                </div>
              </div>
              <v-spacer />
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reviews: 413,
    value: 4.5
  }),
  mounted() {
    // Load the all system options
    this.$store.dispatch('types/fetchAll')
  }
}
</script>
