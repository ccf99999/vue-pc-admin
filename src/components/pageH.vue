<template>
  <div>
    <span v-for="n in items" :key="n">{{ n }}</span>
  </div>
</template>

<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    items() {
      return Math.ceil(this.total / this.pageSize)
    }
  }
}
</script>

<style>
</style>
