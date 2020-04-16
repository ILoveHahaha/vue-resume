<template>
  <div class="test">
    <div class="left">
      <brief :data="briefData" @changeBrief="changeBrief"></brief>
      <selfInfo
        v-for="item in selfInfoData"
        :key="item.id"
        :parentId="item.id"
        :icon="item.icon"
        title-size="14px"
        :title="item.name"
        :infoItem="item.children"
        @changeInfoItem="changeInfoItem">
      </selfInfo>
    </div>
    <div class="right">
      <listItemContent v-for="item in contentInfoData" :key="item.id" :title="item.title" :data="item"></listItemContent>
    </div>
  </div>
</template>

<script>
import brief from '@/components/brief.vue';
import selfInfo from '@/components/common/selfInfo.vue';
import listItemContent from '@/components/common/list-item-content.vue';
import testData from '@/config/testData.js';
export default {
  name: 'test',
  data () {
    return {
      briefData: testData.brief,
      selfInfoData: testData.selfInfo,
      contentInfoData: testData.selfContent
    };
  },
  components: {
    brief,
    selfInfo,
    listItemContent
  },
  methods: {
    /**
     * @param {Object} data 要修改的数据
     * @description 修改原数组的值函数
     * **/
    changeInfoItem (data) {
      for (let a in this.selfInfoData) {
        if (this.selfInfoData[a].id === data.key) {
          if (data.changeKey === 'children') {
            this.selfInfoData[a].children = JSON.parse(JSON.stringify(data.data));
          } else {
            this.selfInfoData[a][data.changeKey] = data.data;
          }
          break;
        }
      }
    },
    /**
     * @param {Object} obj 要修改的头像数据
     * @description 修改头像函数
     * **/
    changeBrief (obj) {
      this.briefData.icon = obj.imgSrc;
    }
  },
  mounted () {
    console.log(this.contentInfoData);
  }
};
</script>

<style lang="less" scoped>
.test{
  margin-top: 40px;
  position: relative;
  width: 790px;
  border: 1px solid #dad8d7;
  background-color: white;
  overflow: hidden;
  box-sizing: border-box;
  .left {
    width: 240px;
    height: 100%;
    box-sizing: border-box;
    float: left;
    background-color: #fdfefe;
    position: relative;
  }

  .right {
    box-sizing: border-box;
    width: calc(~'100% - 240px');
    float: left;
    padding: 25px 20px;
    border-left: 1px solid #dad8d7;

    p {
      font-size: 14px;
      line-height: 18px;
      color: #555;
      text-align: justify;
    }
  }
}
</style>
