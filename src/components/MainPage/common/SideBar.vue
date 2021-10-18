<template lang="pug">
  v-app
    v-app-bar(app='', color='blue')
      v-toolbar-title
      v-spacer
    v-navigation-drawer(floating permanent app width='220' color='indigo' class="pt-15" dark)
      v-list(dense='', rounded='')
        v-list-item(v-for='item in items', :key='item.title', :to="item.link")
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
</template>

<script>
  export default {
    name: 'SideBar',
    data () {
      return {
        items: [
          { title: 'Карта', icon: 'mdi-map-search', link: '/map' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
