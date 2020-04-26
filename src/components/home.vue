<template>
  <div class="home">
    <div class="resume">
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
        <listItemContent
          v-for="item in contentInfoData"
          :key="item.id"
          :title="item.title"
          :data="item"
          :id="item.id"
          @changeChildArr="changeChildArr"></listItemContent>
      </div>
    </div>
    <Guide></Guide>
    <div class="actions">
      <button @click="saveAsImage">Save as Image</button>
      <button @click="saveAsPdf">Save as PDF</button>
      <button @click="print">Print</button>
      <button @click="saveResume">Save</button>
    </div>
    <div class="footer">
      <a href="https://github.com/ILoveHahaha/vue-resume" target="_blank">
        <img src="~@/assets/image/social/social-github.png" height="36" width="36" alt>
      </a>
      ResumeGenerator designed by
      <a href="https://github.com/ILoveHahaha">Abson Wong</a>
      , learned from
      <a href="https://github.com/luosijie">Jesse Luo</a>
    </div>
  </div>
</template>

<script>
  import brief from '@/components/brief.vue';
  import selfInfo from '@/components/common/selfInfo.vue';
  import listItemContent from '@/components/common/list-item-content.vue';
  import testData from '@/config/testData.js';
  import FileSaver from 'file-saver';
  import Guide from '@/components/guide';
  export default {
    name: 'home',
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
      listItemContent,
      Guide
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
      },
      changeChildArr (obj) {
        if (obj.childObj) {
          for (let a of this.contentInfoData) {
            if (a.id === obj.id) {
              this.$set(this.contentInfoData, 'children', [...this.contentInfoData.children, obj.childObj]);
            }
          }
        } else if (obj.type === 'add') {
          for (let a of this.contentInfoData) {
            if (a.id === obj.id) {
              a.children.push(obj.obj);
              break;
            }
          }
        }
      },
      saveAsImage () {
        let resume = document.querySelector('.resume');
        /**
         * scale官方文档上的解释是The scale to use for rendering. Defaults to the browsers device pixel ratio.
         * 默认值读的是window.devicePixelRatio，可以通过传值来控制清晰度
         * **/
        this.$html2canvas(resume, {
          scale: 3
        }).then(canvas => {
          canvas.toBlob(blob => {
            FileSaver.saveAs(blob, 'myResume.png');
          });
        });
      },
      saveAsPdf () {
        this.$html2canvas(document.querySelector('.resume'), {
          scale: 3, // 导出pdf清晰度
          // 背景设为白色（默认为黑色）
          background: '#fff'
        }).then(canvas => {
          let contentWidth = canvas.width;
          let contentHeight = canvas.height;

          // 一页pdf显示html页面生成的canvas高度;
          let pageHeight = contentWidth / 592.28 * 841.89;
          // 未生成pdf的html页面高度
          let leftHeight = contentHeight;
          // pdf页面偏移
          let position = 0;
          // html页面生成的canvas在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
          let imgWidth = 595.28;
          let imgHeight = 592.28 / contentWidth * contentHeight;

          let pageData = canvas.toDataURL('image/jpeg', 1.0);
          let pdf = new this.$jsPdf('', 'pt', 'a4');

          // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
          // 当内容未超过pdf一页显示的范围，无需分页
          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
          } else {
            while (leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
              leftHeight -= pageHeight;
              position -= 841.89;
              // 避免添加空白页
              if (leftHeight > 0) {
                pdf.addPage();
              }
            }
          }
          pdf.save('content.pdf');
        });
      },
      // TODO: 打印这里需要获取dom tree和cssStyleList，然后构成一个渲染树出来进行打印
      print () {
      },
      saveResume () {
        alert('this function is doing');
      }
    },
    mounted () {
    }
  };
</script>

<style lang="less" scoped>
  .home{
    .resume{
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
    .actions {
      position: absolute;
      top: 40px;
      left: 50%;
      margin-left: 415px;
      display: flex;
      flex-direction: column;
      button {
        padding: 5px 8px;
        border-radius: 4px;
        background-color: white;
        border: 1px solid #dad8d7;
        margin-bottom: 5px;
        cursor: pointer;
        &:hover {
          background-color: #f8f8f8;
        }
      }
    }
    .footer {
      line-height: 50px;

      a {
        text-decoration: none;
        color: #4aa74f;

        &:first-child {
          display: block;
          text-align: center;
          line-height: 0;
          margin-top: 15px;
        }
      }
    }
  }
</style>
