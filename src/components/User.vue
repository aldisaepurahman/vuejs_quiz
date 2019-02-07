<template lang="html">
  <div class="">
    <h1>Halo</h1>
    Nama User : {{ firstName }} {{ lastName }}
  </div>
</template>

<script>
export default {
  name: 'User',
  props: [
    'firstName',
    'lastName'
  ]
}
</script>

<style lang="css" scoped>
</style>
