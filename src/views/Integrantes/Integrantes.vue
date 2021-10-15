<template>
  <div>
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <h1 class="display-3 font-weight-black mt-3">
          Integrantes
        </h1>
      </v-row>
    </v-container>

    <div class="d-flex justify-center flex-wrap" tile>
      <v-card
        v-for="Integrantes in Integrantes"
        :key="Integrantes.name"
        class="mx-4 my-2"
        max-width="300"
      >
        <div class="d-flex justify-center mt-3">
          <v-avatar size="200">
            <img :src="Integrantes.img" :alt="Integrantes.name" />
          </v-avatar>
        </div>

        <v-card-text>
          <h2 class="text-h6 red--text">{{ Integrantes.name }}</h2>
          <p class="text-caption">{{ Integrantes.text }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Integrantes",
  components: {},
  data() {
    return {
      Integrantes: [
        {
          name: "Rodolfo R. Ferreira",
          img: require("../../assets/User.png"),
          text: "Developer",
        },
        {
          name: "Juan Lesmes",
          img: require("../../assets/User.png"),
          text: "Scrum Master",
        },
        {
          name: "John Mack",
          img: require("../../assets/User.png"),
          text: "Product Owner",
        },
        {
          name: "Andrés Uribe",
          img: require("../../assets/User.png"),
          text: "Tester",
        },
      ],
    };
  },
};
</script>
