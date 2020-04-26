<template>
  <div class="list-item-content">
    <div class="context-list">
      <div class="list-heading" @contextmenu.prevent="showControl">
        <div class="title">
          <span class="name" :style="{fontSize: titleSize}" contenteditable="true">{{title}}</span>
        </div>
        <listItemMenu
          v-if="listControlStatus"
          v-model="listControlStatus"
          @changeObj="changeDataObj"
          :menus="menus"
          ref="listItemMenus"></listItemMenu>
      </div>
      <ul class="list-item-ul">
        <listItemControl v-for="item in data.children" :key="item.key" :data="item"></listItemControl>
      </ul>
    </div>
  </div>
</template>

<script>
import listItemMenu from '@/components/common/list-item-menu.vue';
import listItemControl from '@/components/common/list-item-control.vue';
export default {
  name: 'list-item-content',
  data () {
    return {
      listItemStatus: true,
      listControlStatus: false,
      menus: ['addAllControl', 'removeAllControl', 'backControl', 'cancelControl']
    };
  },
  components: {
    listItemControl,
    listItemMenu
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
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    showControl () {
      this.listControlStatus = true;
      this.$nextTick(() => {
        this.$refs.listItemMenus.$el.focus();
      });
    },
    changeDataObj (obj) {
      if (typeof obj === 'object') {
        if (obj.id) {
          this.$emit('changeChildArr', {
            type: 'add',
            id: this.id,
            obj: obj
          });
        } else {
          this.$emit('changeChildArr', {
            type: 'delete',
            id: this.id
          });
        }
      } else {
        throw new Error('return a error param');
      }
      console.log(obj, this.data);
    }
  },
  mounted () {
    console.log(this.data);
  }
};
</script>

<style lang="less" scoped>
.list-item-content{
  .context-list {
    width: 100%;
    margin-bottom: 0px;

    .list-heading {
      position: relative;
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
