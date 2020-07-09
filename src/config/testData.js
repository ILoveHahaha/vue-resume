import {HashGenerator} from '@/config/hashGenerator.js';
export default {
  brief: {
    name: '黄镇东',
    position: 'web前端工程师',
    location: '广东广州',
    experience: '三年',
    age: 24,
    degree: '本科',
    icon: require('@/assets/image/other/logo_name.png')
  },
  selfInfo: [
    {
      title: 'Contact',
      name: '联系方式',
      id: 'CONTACT',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/contact/contact-phone.png'), value: '15602265338', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/contact/contact-mail.png'), value: 'zhengbanbugu@163.com', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/social/social-wechat.png'), value: '15602265338', id: new HashGenerator().getHashValue()}
      ]
    },
    {
      title: 'Social',
      name: '作品地址',
      id: 'SOCIAL',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/social/social-github.png'), value: 'https://github.com/ILoveHahaha', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/social/csdn.jpg'), value: 'blog.csdn.net/Tank_in_the_street', id: new HashGenerator().getHashValue()}
      ]
    },
    {
      title: 'Skill',
      name: '技能',
      id: 'SKILL',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/skill/skill-vue.png'), value: 'Vue', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/skill/skill-node.png'), value: 'Node', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/skill/webpack.jpg'), value: 'webpack', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/skill/js.jpg'), value: 'JavaScript', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/skill/react.jpg'), value: 'React', id: new HashGenerator().getHashValue()}
      ]
    }
  ],
  selfContent: [
    {
      title: '关于我',
      id: new HashGenerator().getHashValue(),
      children: [
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '',
          secondParam: '',
          thirdParam: '',
          content: `
            三年的前端开发经验，专业是信息与计算科学。喜欢通过数据来探究人与产品，热爱新技术，喜欢自己造轮子提高开发效率。常用的技术有vue、node.js、JavaScript等等，遵从设计模式里的六大原则。
          `,
          paramStatus: false,
          contentStatus: true
        }
      ]
    },
    {
      title: '教育',
      id: new HashGenerator().getHashValue(),
      children: [
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '仲恺农业工程学院',
          secondParam: '软件工程',
          thirdParam: '2014.9-2018.6',
          content: '',
          paramStatus: true,
          contentStatus: false
        }
      ]
    },
    {
      title: '工作经验',
      id: new HashGenerator().getHashValue(),
      children: [
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '上海境领信息科技有限公司',
          secondParam: '前端开发工程师',
          thirdParam: '2017.8 - 2018.5',
          content: `
            负责公司的产品研发，参与公司产品设计和维护，包括公司官网首页、火牛信息安全系统的开发、维护和迭代。
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '广州明动软件股份有限公司',
          secondParam: '前端开发工程师',
          thirdParam: '2018.6 - 至今',
          content: `
            负责公司pc端和终端项目的维护与开发，参与公司产品设计和维护，包括有政府门户官网的开发、可视化监控系统、移动终端机、政府pc端项目页面的开发。负责实习生的指导和培训。
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '审批4.0系统',
          secondParam: '前端',
          thirdParam: '2020.5 - 至今',
          content: `
            该项目主要是公司后台的项目管理系统，在该项目中本人通过灵活的配置vue-cli来提升工作效率。主要做了以下的配置：
            1.配置happypack，通过获取开发者电脑的一半cpu数来开启多线程提升至少50%的项目打包和构建的速度。
            2.封装了一个svg组件，读取svg文件目录下的所有svg，并且利用svg-sprite-loader这个loader，使得可以直接输入某个svg的文件名就直接读取展示出来，减少冗余代码
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '开发区智能审批项目开发',
          secondParam: '前端',
          thirdParam: '2019.5 - 2020.5',
          content: `
            该项目是面向群众的一个政府政务服务办事系统。在该项目中本人通过如下手段来提升工作效率：
            1.由于该项目是与其他厂商合作，他们提供的插件或者库比较老，导致引入工程化的前端项目时有点棘手，通过配置webpack的alias来局部引用这些库，避免污染到全局变量，使问题控制在一个范围内
            2.由于该项目是个多页应用，使用webpack进行项目优化，利用HtmlWebpackExternalsPlugin提取公共资源（vue、vue-router等），减少打包之后大小。
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '海珠区智慧小屋和街道办事项目',
          secondParam: '前端',
          thirdParam: '2018.7 - 2018.11',
          content: `
            该项目是面向群众的一个政府政务服务办事系统。在该项目中的亮点有：
            1.利用sass-resources-loader来全局混入公共的sass样式，不必每个文件都导入公共的sass样式
            2.简单的封装了一下webSocket，因为webSocket在一段时间内静默会断线，所以加入了心跳包。
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '火牛智能监控防御系统2.0',
          secondParam: '前端',
          thirdParam: '2017.8 - 2018.5',
          content: `
            该项目面向的客户是企业级的，主要是用来部署到企业服务上，通过系统监听服务和前端进行控制和展示服务情况。前端页面架构主要是通过Angular来实现的，数据展示主要用到echarts，一些动画效果通过canvas来实现。
          `,
          paramStatus: true,
          contentStatus: true
        }
      ]
    }
  ]
};
