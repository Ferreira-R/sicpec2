<template>
  <v-app>
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from "../../views/Calendar/Calendar.vue";

export default {
  name: "Home",
  components: {
    Calendar,
  },
  data: () => ({
    //
  }),
};
</script>
