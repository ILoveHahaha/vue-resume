<template>
  <div class="test">
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
</template>

<script>
import testData from '@/config/testData.js';
import selfInfo from '@/components/common/selfInfo.vue';
export default {
  name: 'test',
  data () {
    return {
      myData: testData,
      selfInfoData: testData.selfInfo
    };
  },
  components: {
    selfInfo
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
    }
  },
  mounted () {
  }
};
</script>

<style lang="less" scoped>
.test{
  width: 240px;
}
</style>
