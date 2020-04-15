<template>
  <div class="list-control-panel">
    <li class="list-item" @contextmenu.prevent="showControl" v-if="listItemStatus">
      <div class="list-item-info">
        <editImage :src="itemObj.icon" class="img" height="18" width="18" @returnImg="returnImg"/>
        <span contenteditable="true">{{ itemObj.value }}</span>
      </div>
      <div v-if="listControlStatus" class="list-control">
        <span @click="deleteControl">delete</span>
        <span @click="cancelControl">cancel</span>
      </div>
    </li>
  </div>
</template>

<script>
import editImage from '@/components/common/edit-image';
export default {
  name: 'list-control',
  data () {
    return {
      listControlStatus: false,
      listItemStatus: true
    };
  },
  components: {
    editImage
  },
  props: {
    itemObj: {
      type: Object,
      default: {}
    }
  },
  methods: {
    returnImg (img) {},
    cancelControl () {
      this.listControlStatus = false;
    },
    deleteControl () {
      this.$emit('deleteItem', this.itemObj);
      this.listItemStatus = false;
    },
    showControl () {
      this.listControlStatus = true;
    }
  },
  mounted () {
  }
};
</script>

<style lang="less" scoped>
.list-control-panel{
  position: relative;
  .list-control {
    display: flex;
    position: absolute;
    border: 1px solid #dad8d7;
    border-radius: 4px;
    width: 160px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-top: -15px;
    margin-left: -80px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    & > span {
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 30px;
      cursor: pointer;

      &:hover {
        color: white;
        background-color: rgba(0, 0, 0, 0.9);
      }
    }

    & > span:first-child {
      border-radius: 4px 0 0 4px;
    }

    & > span:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
  .list-item{
    .list-item-info{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e9e8e8;
      height: 30px;

      .img {
        margin: 0 20px 0 15px;
      }

      span {
        font-size: 12px;
        color: #555;
      }
    }
  }
}
</style>
