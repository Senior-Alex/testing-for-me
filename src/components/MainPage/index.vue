<template lang="pug">
  v-app
    SideBar
    v-content
      v-container(fluid style="padding: 100px 30px 30px;" fill-height)
        v-card(min-height="100%", min-width="100%", elevation=4)
          router-view
</template>

<script>
import SideBar from './common/SideBar'
  export default {
    name: 'MainPage',
    components: {
      SideBar
    }
  }
</script>

<style scoped>

</style>
