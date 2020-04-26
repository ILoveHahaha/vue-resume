// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import html2canvas from 'html2canvas'; // @link https://html2canvas.hertzen.com/configuration
import jsPdf from 'jspdf'; // @link https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html

Vue.config.productionTip = false;
Vue.prototype.$html2canvas = html2canvas;
Vue.prototype.$jsPdf = jsPdf;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
