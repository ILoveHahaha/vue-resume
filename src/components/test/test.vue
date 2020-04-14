<template>
  <div class="test">
    <!--<selfInfo></selfInfo>-->
  </div>
</template>

<script>
import testData from '@/config/testData.js';
import selfInfo from '@/components/common/selfInfo.vue';
export default {
  name: 'test',
  data () {
    return {
      myData: testData
    };
  },
  components: {
    selfInfo
  },
  mounted () {
    console.log(this.myData);
  }
};
</script>

<style lang="less" scoped>

</style>
