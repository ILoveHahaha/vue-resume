<template>
  <div class="self-info">
    <div class="context-list" :class="{ 'icon-margin-bottom': icon }">
      <div class="list-heading" :class="{ 'icon-class': icon }">
        <div class="title">
          <editImage v-if="icon" :src="icon" height="20" width="20" class="img" @returnImg="returnImg"/>
          <span class="name" :style="{fontSize: titleSize}" contenteditable="true">{{title}}</span>
        </div>
        <div class="button add" @click="add" :class="{ 'icon-margin-right': icon }">+</div>
      </div>
      <!--TODO 尚未完成，添加功能还未完成-->
      <ul v-if="infoItem && infoItem.length">
        <listControl
          v-for="item in infoItem"
          :key="item.key"
          :itemObj="item"
          :itemParentKey="parentId"
          @deleteItem="deleteItem"></listControl>
      </ul>
    </div>
  </div>
</template>

<script>
  import editImage from '@/components/common/edit-image';
  import listControl from '@/components/common/list-control';
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
        listControlState: false
      };
    },
    methods: {
      returnImg (img) {},
      add () {},
      // TODO: 后面需要存入vuex中
      deleteItem (obj) {
        for (let a in this.infoItem) {
          if (this.infoItem[a].id === obj.id) {
            this.infoItem.splice(a, 1);
            break;
          }
        }
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
