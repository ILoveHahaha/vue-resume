<template>
  <div class="list-item-content">
    <div class="context-list">
      <div class="list-heading">
        <div class="title">
          <span class="name" :style="{fontSize: titleSize}" contenteditable="true">{{title}}</span>
        </div>
      </div>
      <ul class="list-item-ul">
        <listItemControl v-for="item in data.children" :key="item.key" :data="item"></listItemControl>
      </ul>
    </div>
  </div>
</template>

<script>
import listItemControl from '@/components/common/list-item-control.vue';
export default {
  name: 'list-item-content',
  data () {
    return {
      listItemStatus: true
    };
  },
  components: {
    listItemControl
  },
  props: {
    titleSize: {
      type: String,
      default: '16px'
    },
    title: {
      type: String,
      default: 'Title'
    },
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
  },
  mounted () {
  }
};
</script>

<style lang="less" scoped>
.list-item-content{
  .context-list {
    width: 100%;
    margin-bottom: 0px;

    .list-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        align-items: center;

        .img {
          margin: 0 20px 0 15px;
        }

        span.name {
          margin: 10px 0;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
