<template>
    <div
      class="list-item-menu"
      tabindex="-1"
      @blur="cancelControl">
      <span v-for="item in currMenu" :key="item.funcName" @click="runFunc(item.funcName)">
        <i :class="item.iconStyle" :title="item.title"></i>
      </span>
    </div>
</template>

<script>
import {HashGenerator} from '@/config/hashGenerator.js';
export default {
  name: 'list-item-menu',
  props: {
    value: {
      type: Boolean
    },
    currDataObj: {
      type: Object
    }
  },
  data () {
    return {
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
      tempObj: {},
      newObj: {
        content: '',
        contentStatus: true,
        firstParam: '',
        id: '',
        paramStatus: false,
        secondParam: '',
        thirdParam: ''
      }
    };
  },
  methods: {
    runFunc (funcName) {
      this[funcName]();
    },
    addControl () {
      this.currMenu = this.menuPanel.children[0].addControl;
    },
    addTitleControl () {
      if (this.tempObj.paramStatus) {} else {
        this.$set(this.tempObj, 'paramStatus', true);
        this.sendDataObj(this.tempObj);
      }
    },
    addContentControl () {
      if (this.tempObj.contentStatus) {} else {
        this.$set(this.tempObj, 'contentStatus', true);
        this.sendDataObj(this.tempObj);
      }
    },
    addAllControl () {
      this.$set(this.newObj, 'id', new HashGenerator().getHashValue());
      this.sendDataObj(this.newObj);
    },
    removeTitleControl () {
      if (this.tempObj.paramStatus) {
        this.$set(this.tempObj, 'paramStatus', false);
        this.sendDataObj(this.tempObj);
      } else {}
    },
    removeContentControl () {
      if (this.tempObj.contentStatus) {
        this.$set(this.tempObj, 'contentStatus', false);
        this.sendDataObj(this.tempObj);
      } else {}
    },
    removeAllControl () {
      this.sendDataObj({});
    },
    sendDataObj (obj) {
      this.$emit('changeObj', obj);
    },
    deleteControl () {
      this.currMenu = this.menuPanel.children[1].deleteControl;
    },
    backControl () {
      this.currMenu = this.menuPanel.funcMenu;
    },
    cancelControl () {
      this.$emit('input', false);
      // this.listControlStatus = false;
    }
  },
  created () {
    this.tempObj = JSON.parse(JSON.stringify(this.currDataObj));
    this.backControl();
  }
};
</script>

<style lang="less" scoped>
.list-item-menu{
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
</style>
