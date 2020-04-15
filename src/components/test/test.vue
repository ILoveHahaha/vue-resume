<template>
  <div class="test">
    <selfInfo
      v-for="item in selfInfoData"
      :key="item.id"
      :parentId="item.id"
      :icon="item.icon"
      title-size="14px"
      :title="item.name"
      :infoItem="item.children">
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
  methods: {},
  mounted () {
  }
};
</script>

<style lang="less" scoped>
.test{
  width: 240px;
}
</style>
