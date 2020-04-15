<template>
  <div class="self-info">
    <div class="context-list" :class="{ 'icon-margin-bottom': icon }">
      <div class="list-heading" :class="{ 'icon-class': icon }">
        <div class="title">
          <editImage v-if="icon" :src="icon" :curComId="parentId" height="20" width="20" class="img" @returnImg="returnImg"/>
          <span class="name" :style="{fontSize: titleSize}" contenteditable="true">{{title}}</span>
        </div>
        <div class="button add" @click="add" :class="{ 'icon-margin-right': icon }">+</div>
      </div>
      <ul v-if="currInfoItem && currInfoItem.length">
        <listControl
          v-for="item in currInfoItem"
          :key="item.id"
          :itemObj="item"
          :itemParentKey="parentId"
          @changeItem="changeItem"
          @deleteItem="deleteItem"></listControl>
      </ul>
    </div>
  </div>
</template>

<script>
  import editImage from '@/components/common/edit-image.vue';
  import listControl from '@/components/common/list-control.vue';
  import {HashGenerator} from '@/config/hashGenerator.js';
  export default {
    name: 'selfInfo',
    props: {
      infoItem: Array,
      title: {
        type: String,
        default: 'Title'
      },
      titleSize: {
        type: String,
        default: '16px'
      },
      icon: {
        type: String,
        default: ''
      },
      parentId: {
        type: String,
        default: ''
      }
    },
    components: {
      editImage,
      listControl
    },
    data () {
      return {
        listControlState: false,
        currInfoItem: JSON.parse(JSON.stringify(this.infoItem))
      };
    },
    methods: {
      /**
       * @param {Object} imgObj 返回的图片信息对象
       * @description 获取修改的图片对象
       * **/
      returnImg (imgObj) {
        this.sendParentData({key: this.parentId, data: imgObj.imgSrc, changeKey: 'icon'});
      },
      /**
       * @param {Object} obj 被修改的数据
       * @param {String=} parentKey 定义给父组件回调的方法名
       * @description 触发父组件回调函数
       * **/
      sendParentData (obj, parentKey = 'changeInfoItem') {
        this.$emit(parentKey, {...obj});
      },
      /**
       * @description 数据添加函数
       * **/
      add () {
        this.currInfoItem.push({
          icon: require('@/assets/image/contact/contact-phone.png'),
          value: '请填写',
          id: new HashGenerator().getHashValue()
        });
        this.sendParentData({key: this.parentId, data: this.currInfoItem, changeKey: 'children'});
      },
      // TODO: 后面需要存入vuex中
      /**
       * @param {Object} obj 选中的数据
       * @description 删除指定数据
       * **/
      deleteItem (obj) {
        for (let a in this.currInfoItem) {
          if (this.currInfoItem[a].id === obj.id) {
            this.currInfoItem.splice(a, 1);
            break;
          }
        }
        this.sendParentData({key: this.parentId, data: this.currInfoItem, changeKey: 'children'});
      },
      /**
       * @param {Object} imgObj 返回的图片对象
       * @description 修改当前item里的图片
       * **/
      changeItem (imgObj) {
        for (let a in this.currInfoItem) {
          if (this.currInfoItem[a].id === imgObj.id) {
            this.currInfoItem[a].icon = imgObj.imgSrc;
            break;
          }
        }
        this.sendParentData({key: this.parentId, data: this.currInfoItem, changeKey: 'children'});
      }
    }
  };
</script>

<style lang="less" scoped>
.self-info{
  width: 100%;
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

      &:hover .add {
        display: block;
      }

      .add {
        display: none;
      }

      .button {
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        border-radius: 50%;
        background: none;
        border: 1px solid #dad8d7;
        cursor: pointer;

        &:hover {
          background: #f2f2f2;
        }
      }
    }
  }

  .icon-class {
    background-color: #f6f7f7;
    border-bottom: 1px solid #e9e8e8;
  }

  .icon-margin-bottom {
    margin-bottom: 0;
  }

  .icon-margin-right {
    margin-right: 15px;
  }
}
</style>
