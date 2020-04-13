<template>
  <!--TODO 尚未完成-->
  <div class="self-info">
    <div class="context-list" :class="{ 'icon-margin-bottom': icon }">
      <div class="list-heading" :class="{ 'icon-class': icon }">
        <div class="title">
          <EditImage v-if="icon" :src="icon" height="20" width="20" class="img" @returnImg="returnImg"/>
          <span class="name" :style="{fontSize: titleSize}" contenteditable="true">{{title}}</span>
        </div>
        <div class="button add" @click="add" :class="{ 'icon-margin-right': icon }">+</div>
      </div>
    </div>
  </div>
</template>

<script>
  import EditImage from '@/components/common/edit-image';
  export default {
    name: 'selfInfo',
    props: {
      infoName: String,
      infoItem: Array,
      titleSize: {
        type: String,
        default: '16px'
      },
      icon: {
        type: String,
        default: ''
      }
    },
    components: {
      EditImage
    },
    methods: {
      returnImg (img) {}
    }
  };
</script>

<style lang="less" scoped>
.self-info{

}
</style>
