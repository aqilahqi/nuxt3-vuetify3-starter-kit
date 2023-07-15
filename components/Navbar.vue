<template>
  <div>
    <v-app-bar>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
          icon="$vuetify"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
        >
          {{ link }}
        </v-btn>

      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
  const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];
</script>
