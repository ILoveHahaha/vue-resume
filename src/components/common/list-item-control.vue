<template>
  <li class="list-item" @contextmenu.prevent="showControl">
    <div class="heading" v-if="currDataObj.paramStatus">
      <div class="firstParam">
        <span contenteditable="true" v-html="currDataObj.firstParam || 'Your info'"></span>
      </div>
      <div class="secondParam">
        <span contenteditable="true" v-html="currDataObj.secondParam || 'Your info'"></span>
      </div>
      <div class="thirdParam">
        <span contenteditable="true" v-html="currDataObj.thirdParam || 'Your info'"></span>
      </div>
    </div>
    <p contenteditable="true" v-html="currDataObj.content || 'Your info'" v-if="currDataObj.contentStatus"></p>
    <listItemMenu
      v-if="listControlStatus"
      v-model="listControlStatus"
      :currDataObj="currDataObj"
      @changeObj="changeDataObj"
      :menus="menus"
      ref="listItemMenus"></listItemMenu>
  </li>
</template>

<script>
import listItemMenu from '@/components/common/list-item-menu.vue';
export default {
  name: 'list-item-control',
  props: {
    data: {
      type: Object,
      default: {}
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      listControlStatus: false,
      currDataObj: {},
      menus: ['addTitleControl', 'addContentControl', 'removeTitleControl', 'removeContentControl', 'cancelControl']
    };
  },
  components: {
    listItemMenu
  },
  methods: {
    /**
     * @description 展示按钮函数
     * **/
    showControl () {
      this.listControlStatus = true;
      this.$nextTick(() => {
        this.$refs.listItemMenus.$el.focus();
      });
    },
    changeDataObj (obj) {
      if (obj.id === this.currDataObj.id) {
        this.currDataObj = JSON.parse(JSON.stringify(obj));
      } else {
        console.log(obj);
      }
    }
  },
  created () {
    this.currDataObj = this.data;
  },
  mounted () {}
};
</script>

<style lang="less" scoped>
.list-item{
  position: relative;
  p {
    font-size: 14px;
    line-height: 18px;
    color: #555;
    text-align: justify;
  }
  .heading {
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    .firstParam {
      width: 40%
    }

    .secondParam {
      width: 35%;
    }

    .thirdParam {
      width: 25%;
      text-align: right;
    }
  }
}
</style>
