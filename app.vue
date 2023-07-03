<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <div myProp="prop"></div>
      <div
        key="1"
        aasd="1"
        basd="2"
        ceqAasd="3"
        dadfas="4"
      />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
  function myFuntion(param1, param2, param3, param4) {
    console.log('asjdkasdkl');
  }
</script>

<style lang="scss">
  body {
    background-color: red;
  }
</style>
