<template>
  <v-app :dark="false">
    <Navbar />
    Hello
    <v-main class="pa-0">
      <slot />
    </v-main>
  </v-app>
</template>
<script setup></script>
