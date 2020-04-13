<template>
  <div class="brief">
    <div class="avatar">
      <EditImage :src="require('@/assets/image/other/logo_name.png')" width="100" height="100" :isCircle="true" class="img"/>
      <div class="name" contenteditable="true" v-html="data.name" @input="contentChange('name', $event)"></div>
      <div class="job" contenteditable="true" v-html="data.position" @input="contentChange('position', $event)"></div>
      <div class="location">
        <div class="location-name" contenteditable="true" v-html="data.location"
             @input="contentChange('location', $event)"></div>
      </div>
    </div>
    <div class="info">
      <ul>
        <li>
          <span class="key" contenteditable="true">工作经验</span>
          <br>
          <span class="value" contenteditable="true" v-html="data.experience" @input="contentChange('experience', $event)"></span>
        </li>
        <li>
          <span class="key" contenteditable="true">年龄</span>
          <br>
          <span class="value" contenteditable="true" v-html="data.age" @input="contentChange('age', $event)"></span>
        </li>
        <li>
          <span class="key" contenteditable="true">学历</span>
          <br>
          <span class="value" contenteditable="true" v-html="data.degree" @input="contentChange('degree', $event)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import EditImage from '@/components/common/edit-image';

  export default {
    name: 'Brief',
    props: {
      data: {
        type: Object,
        default: () => {
        }
      }
    },
    components: {
      EditImage
    },
    methods: {
      contentChange (key, e) {
        this.data[key] = e.target.innerText;
        console.log('brief-change', this.data);
      }
    }
  };
</script>
<style lang="less">
  .brief {
    width: 100%;
    // height: 575px;
    background-color: #f6f7f7;

    .avatar {
      height: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > .img {
        margin-bottom: 10px;
      }

      .name {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .job {
        font-size: 14px;
        color: #555;
        margin-bottom: 5px;
      }

      .location {
        display: flex;
        align-itmes: center;

        .location-name {
          font-size: 12px;
          font-weight: bold;
          margin-left: 10px;
        }
      }
    }

    .info {
      width: 100%;
      overflow: hidden;
      border-top: 1px solid #dad8d7;
      border-bottom: 1px solid #dad8d7;
      & > ul {
        height: 100%;
        li:not(:last-child) {
          border-right: 1px solid #dad8d7;
        }

        li {
          float: left;
          width: 33.1%;
          box-sizing: border-box;
          height: 100%;
          overflow: hidden;
          text-align: center;
          padding: 10px 0;
          span {
            display: inline-block;
            margin: 0 auto;
          }
          .value {
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: bold;
          }
          .key {
            font-size: 12px;
            font-weight: bold;
            color: #555;
          }
        }
      }
    }
  }

</style>
