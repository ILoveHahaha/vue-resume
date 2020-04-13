<template>
  <ListItem class="list-item-info">
    <EditImage :src="image" class="img" height="18" width="18" @returnImg="returnImg"/>
    <span contenteditable="true">{{ title }}</span>
  </ListItem>
</template>
<script>
  import ListItem from '@/components/common/list-item';
  import EditImage from '@/components/common/edit-image';

  export default {
    name: 'ListItemInfo',
    components: {
      ListItem,
      EditImage
    },
    props: {
      image: {
        type: String,
        default: require('@/assets/image/social/social-github.png')
      },
      title: {
        type: String,
        default: 'github.com/luosijie'
      }
    },
    methods: {
      returnImg (img) {
      }
    }
  };

</script>
<style lang="less">
  .list-item-info {
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

</style>
