<template>
  <v-app>
        

        <v-content>
          <section id="hero">
            <v-row no-gutters>
              <v-img
                :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
              >
                <v-theme-provider dark>
                  <v-container fill-height>
                    <v-row
                      align="center"
                      class="white--text mx-auto"
                      justify="center"
                    >
                      <v-col class="white--text text-center" cols="12" tag="h1">
                        <span
                          :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                          class="font-weight-light"
                        >
                          BIENVENIDO A
                        </span>

                        <br />

                        <span
                          :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                          class="font-weight-black"
                        >
                          SICPEP
                        </span>
                      </v-col>

                      <v-btn
                        class="align-self-end"
                        fab
                        outlined
                        @click="$vuetify.goTo('#about-me')"
                      >
                        <v-icon>mdi-chevron-double-down</v-icon>
                      </v-btn>
                    </v-row>
                  </v-container>
                </v-theme-provider>
              </v-img>
            </v-row>
          </section>

          <section id="about-me">
            <div class="py-12"></div>

            <v-container class="text-center">
              <h2 class="display-2 font-weight-bold mb-3">¿Qué es?</h2>

              <v-responsive class="mx-auto mb-8" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
              </v-responsive>

              <v-responsive
                class="mx-auto title font-weight-light mb-8"
                max-width="720"
              >
                SICPEP se constituye cómo un Sistema de Información de Clases
                Particulares, Especializadas y Particulares; enfocado en la
                habilitación de un módulo de agendamiento para la gestión de
                tutorías de cualquier tipo.
              </v-responsive>

              <div></div>
            </v-container>
          </section>
        </v-content>
      </v-app>
</template>

<script>
export default {
  
}
</script>

