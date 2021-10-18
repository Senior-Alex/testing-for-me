<template lang="pug">
  v-navigation-drawer(app width="220" permanent style="background: #4292fc" dark)
    v-layout(column fill-height class="pt-15")
      v-list
        v-list-item(v-for="item in items", :key="item.title", :to="item.link")
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
</template>

<script>
  export default {
    name: 'SideBar',
    data: () => ({
      items: [
        { title: 'Карта', icon: 'mdi-map-search', link: '/map' }
      ]
    })
  }
</script>

<style lang="scss" scoped>
</style>
