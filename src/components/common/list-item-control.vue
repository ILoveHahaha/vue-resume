<template>
  <!--TODO 功能未完成-->
  <li class="list-item" @contextmenu.prevent="showControl">
    <div class="heading" v-if="data.paramStatus">
      <div class="firstParam">
        <span contenteditable="true" v-html="data.firstParam"></span>
      </div>
      <div class="secondParam">
        <span contenteditable="true" v-html="data.secondParam"></span>
      </div>
      <div class="thirdParam">
        <span contenteditable="true" v-html="data.thirdParam"></span>
      </div>
    </div>
    <p contenteditable="true" v-html="data.content" v-if="data.contentStatus"></p>
    <div
      class="list-control-panel"
      v-if="listControlStatus"
      tabindex="-1"
      ref="listControlPanel"
      @blur="cancelControl">
      <span v-for="item in currMenu" :key="item.funcName" @click="runFunc(item.funcName)">
        <i :class="item.iconStyle" :title="item.title"></i>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'list-item-control',
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      listControlStatus: false,
      menuPanel: {
        funcMenu: [
          {funcName: 'addControl', iconStyle: 'add-icon', title: '添加功能'},
          {funcName: 'deleteControl', iconStyle: 'delete-icon', title: '删除功能'},
          {funcName: 'cancelControl', iconStyle: 'cancel-icon', title: '取消'}
        ],
        children: [
          {addControl: [
            {funcName: 'addTitleControl', iconStyle: 'add-icon', title: '添加栏目'},
            {funcName: 'addContentControl', iconStyle: 'add-icon', title: '添加内容区'},
            {funcName: 'addAllControl', iconStyle: 'add-icon', title: '添加栏目和内容区'},
            {funcName: 'backControl', iconStyle: 'back-icon', title: '返回上一级'},
            {funcName: 'cancelControl', iconStyle: 'cancel-icon', title: '取消'}
          ]},
          {deleteControl: [
            {funcName: 'removeTitleControl', iconStyle: 'delete-icon', title: '删除栏目'},
            {funcName: 'removeContentControl', iconStyle: 'delete-icon', title: '删除内容区'},
            {funcName: 'removeAllControl', iconStyle: 'delete-icon', title: '删除栏目和内容区'},
            {funcName: 'backControl', iconStyle: 'back-icon', title: '返回上一级'},
            {funcName: 'cancelControl', iconStyle: 'cancel-icon', title: '取消'}
          ]}
        ]
      },
      currMenu: [],
      currDataObj: {}
    };
  },
  methods: {
    runFunc (funcName) {
      this[funcName]();
    },
    addControl () {
      this.currMenu = this.menuPanel.children[0].addControl;
    },
    addTitleControl () {},
    addContentControl () {},
    addAllControl () {},
    removeTitleControl () {},
    removeContentControl () {},
    removeAllControl () {},
    deleteControl () {
      this.currMenu = this.menuPanel.children[1].deleteControl;
    },
    backControl () {
      this.currMenu = this.menuPanel.funcMenu;
    },
    cancelControl () {
      this.listControlStatus = false;
    },
    /**
     * @description 展示按钮函数
     * **/
    showControl () {
      this.listControlStatus = true;
      this.$nextTick(() => {
        this.$refs.listControlPanel.focus();
      });
    }
  },
  created () {
    this.currDataObj = this.data;
    console.log(this.currDataObj);
    this.backControl();
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
  .list-control-panel{
    display: flex;
    position: absolute;
    border: 1px solid #dad8d7;
    border-radius: 4px;
    width: 150px;
    height: 30px;
    right: 0;
    bottom: -30px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    outline: 0;
    z-index: 1;

    & > span {
      width: 50px;
      height: 100%;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      i{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-top: 5px;
      }
    }

    & > span:first-child {
      border-radius: 4px 0 0 4px;
    }

    & > span:last-child {
      border-radius: 0 4px 4px 0;
    }

    .add-icon {
      background: url("../../assets/image/commonIcon/addActive.png") no-repeat;
      background-size: 20px 20px;
    }
    .delete-icon{
      background: url("../../assets/image/commonIcon/removeActive.png") no-repeat;
      background-size: 20px 20px;
    }
    .cancel-icon {
      background: url("../../assets/image/commonIcon/cancelActive.png") no-repeat;
      background-size: 20px 20px;
    }
    .back-icon {
      background: url("../../assets/image/commonIcon/back.png") no-repeat;
      background-size: 20px 20px;
    }
  }
}
</style>
