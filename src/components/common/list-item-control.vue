<template>
  <!--TODO 功能未完成-->
  <li class="list-item" @contextmenu.prevent="showControl">
    <div class="heading" v-if="currDataObj.paramStatus">
      <div class="firstParam">
        <span contenteditable="true" v-html="currDataObj.firstParam"></span>
      </div>
      <div class="secondParam">
        <span contenteditable="true" v-html="currDataObj.secondParam"></span>
      </div>
      <div class="thirdParam">
        <span contenteditable="true" v-html="currDataObj.thirdParam"></span>
      </div>
    </div>
    <p contenteditable="true" v-html="currDataObj.content" v-if="currDataObj.contentStatus"></p>
    <listItemMenu
      v-if="listControlStatus"
      v-model="listControlStatus"
      :currDataObj="currDataObj"
      @changeObj="changeDataObj"
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
      currDataObj: {}
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
      console.log(obj, this.currDataObj);
      if (!obj.id) {
        this.$emit('changeChildArr', {
          id: this.id,
          childObj: null
        });
      } else if (obj.id === this.currDataObj.id) {
        this.currDataObj = JSON.parse(JSON.stringify(obj));
      } else {
        this.$emit('changeChildArr', {
          id: this.id,
          childObj: obj
        });
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
  .heading {
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
