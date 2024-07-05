<template>
    <div>
      <template v-for="item in menuList" :key="item.path">
        <!--      分为两种方式渲染：有子菜单和没有子菜单-->
        <el-sub-menu
            :index="item.path"
            v-if="item.children &&  item.children.length"
        >
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <!--        有子菜单的继续遍历（递归）-->
          <menuTree :menuList="item.children"></menuTree>
        </el-sub-menu>
        <!--      没有子菜单-->
        <el-menu-item :index="item.path" >
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </div>
  </template>
  <script>
  export default ({
    name: 'menu-tree',
    props: {
      menuList: {
        type: Array
      }
    },
    setup(props) {
        console.log('props',props)
      return {};
    }
  })
  </script>