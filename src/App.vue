<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
};
</script>
<style lang="less">
body {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

p {
  margin: 0 0 12px 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@page {
  size: auto;
  margin: 0;
  color: #ffffff;
  // -webkit-print-color-adjust: exact;
  // print-color-adjust: exact;
}
@media print {
  html,
  body,
  #app {
    font-size: 0 !important;
    min-height: auto !important;
    height: auto !important;
    // min-width: auto !important;
    // font-family: Microsoft YaHei, tahoma, arial, Hiragino Sans GB;
  }
  * {
    color: #000 !important;
    overflow: hidden !important;
  }
  .resume {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    margin-top: 0!important;
    // border: none!important;
  }
  .actions, .guide, .footer {
    display: none!important;
  }
}
</style>
