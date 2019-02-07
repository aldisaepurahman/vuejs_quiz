<template lang="html">
  <div class="">
    <h1>WAA</h1>
    <user v-for="(user, index) in users"
    :firstName="user.firstName"
    :lastName="user.lastName"
    :key="index"></user>
  </div>
</template>

<script>
import User from '@/components/User'

export default {
  name: 'Componentla',
  data(){
    return {
      users: [
        {
          firstName: 'Aldi',
          lastName: 'Saepurahman'
        },
        {
          firstName: 'Ujang',
          lastName: 'Suuk'
        }
      ]
    }
  },
  components: {
    User
  }
}
</script>

<style lang="css" scoped>
</style>
