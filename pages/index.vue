<template>
  <div>
    <v-container>
      <v-alert
        text="This is a default Alert with a 'success' variant"
        title="Alert title"
        type="success"
        class="mb-2"
      >
      </v-alert>
      <v-alert
        color="#2A3B4D"
        icon="mdi-firework"
        density="compact"
        title="Not using dark themed"
        class="mb-2"
      >
        <span class="text-caption"
          >Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
          nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.</span
        >
      </v-alert>
      <v-alert
        color="#C51162"
        theme="dark"
        icon="mdi-material-design"
        border
      >
        <div class="mb-2">
          Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec
          orci lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam
          vitae odio lacinia tincidunt.
        </div>

        <v-dialog
          transition="dialog-bottom-transition"
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              flat
              rounded=""
              color="primary"
              v-bind="props"
              >Open modal from the bottom</v-btn
            >
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar
                color="primary"
                title="Opening from the bottom"
              ></v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  variant="text"
                  @click="isActive.value = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-alert>
      <div class="mt-4">
        <p class="text-primary text-overline">
          <v-icon icon="$vuetify"></v-icon> Vuetify
        </p>
        <h1 class="text-secondary">Heading 1</h1>
        <h2 class="text-secondary-lighten-1">Heading 2</h2>
        <h3 class="text-pink-lighten-1">Heading 3</h3>
        <h4 class="text-purple-lighten-1">Heading 4</h4>
        <h5 class="text-cyan-lighten-1">Heading 5</h5>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss"></style>
