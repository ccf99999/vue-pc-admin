<template>
  <div class="app-wrapper">
    <Menu></Menu>
    <!-- <sidebar class="sidebar-container" /> -->
    <div class="main-container">
      <!-- <navbar /> -->
      <app-main />
    </div>
  </div>
</template>

<script>
// Sidebar, Navbar, 
import { AppMain,Menu } from './components'

export default {
  name: 'layout-page',
  components: {
    // Navbar,
    // Sidebar,
    Menu,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    .main-container{
      background-color: #f4f6f8;
      flex:1;
      min-width: 820px;
    }
    .sidebar-container{
      width: 260px;
      min-width: 260px;
    }
  }

</style>
