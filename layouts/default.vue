<template>
  <v-app :dark="false">
    <v-layout>
      <Navbar />
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
<script setup></script>
