<template>
  <div class="list-control">
    <div v-if="listControl" class="list-control">
      <span @click="deleteControl">delete</span>
      <span @click="cancelControl">cancel</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-control',
  data () {
    return {
      listControl: false
    }
  },
  methods: {
    cancelControl () {
      this.listControl = false;
    },
    deleteControl () {
      this.listItem = false;
    }
  }
}
</script>

<style lang="less" scoped>

</style>
