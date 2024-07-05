<template>
    <div style="height: 100%">
      <h5 class="menu_title">后台管理系统</h5>
      <el-menu
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="tabsActive"
          text-color="#fff"
          router="true"
      >
        <menuTree :menuList="menuList"></menuTree>
      </el-menu>
    </div>
   </template>
    
   <script setup>
   import menuTree from "@/layout/components/MenuTree.vue";
   import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log('router',router,router.getRoutes())
console.log('route',route)



   let menuList = router.getRoutes()
//    import {useMenusStore} from "@/store/permission";
//    import {storeToRefs} from 'pinia'
    
//    let {menuList, tabsActive} = storeToRefs(useMenusStore())
   </script>