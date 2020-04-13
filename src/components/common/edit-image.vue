<template>
  <div class="edit-image" :style="{ width: width + 'px', height: height + 'px'}">
    <img :src="imgSrc" alt="image" :class="{ circle: isCircle }" render-type="background">
    <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage">
  </div>
</template>
<script>
  export default {
    name: 'EditImage',
    props: {
      width: {
        type: String,
        default: '28'
      },
      height: {
        type: String,
        default: '28'
      },
      src: {
        type: String,
        default: require('@/assets/image/other/default-icon.png')
      },
      isCircle: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        imgSrc: this.src
      };
    },
    methods: {
      changeImage (evt) {
        let reader = new FileReader();
        let file = evt.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = (evt) => {
          this.imgSrc = evt.target.result;
          this.$emit('returnImg', this.imgSrc);
        };
      }
    }
  };

</script>
<style lang="less">
  .edit-image {
    position: relative;
    display: inline-block;
    z-index: 999;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    input {
      display: inline-block;
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }

  .circle {
    border-radius: 106px;
  }

</style>
