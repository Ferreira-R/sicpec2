<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue-grey darken-3 body-2 py-1">
        <strong class="subheading"
          >Siguenos en nuestras redes sociales para mantenerte informado de las últimas novedades</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center caption">
        {{ new Date().getFullYear() }} — <strong>Sistema de Información de Clases Particulares Especializadas y Personalizadas - SICPEC</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>