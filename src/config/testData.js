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
        {icon: 'https://csdnimg.cn/public/favicon.ico', value: 'blog.csdn.net/Tank_in_the_street', id: new HashGenerator().getHashValue()}
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
        {icon: 'https://www.webpackjs.com/assets/favicon.ico', value: 'webpack', id: new HashGenerator().getHashValue()},
        {icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588965283567&di=2d525493a8477ee8117aa0984d497f87&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fe4dde71190ef76c6ac26b6319516fdfaaf516737.jpg', value: 'JavaScript', id: new HashGenerator().getHashValue()}
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
            两年多的前端开发经验，专业是信息与计算科学。喜欢通过数据来探究人与产品，热爱新技术，喜欢自己造轮子提高开发效率。常用的技术有vue、node.js、JavaScript等等，遵从设计模式里的六大原则。
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
          firstParam: '开发区智能审批项目开发',
          secondParam: '前端',
          thirdParam: '2019.5 - 2020.3',
          content: `
            该项目是面向群众的一个政府政务服务办事系统。主要分为终端智能审批系统、客户端排队取号系统和终端预约取号系统。整个项目都是通过vue来做页面的架构，智能审批系统由于与第三方对接他们的组件，故使用webpack来引入他们的代码组件。排队取号系统通过websocket来与后端建立连接来返回要展示的数据。预约取号系统通过webRTC技术来通过前端获取当前机器的内外ip，从而方便运维人员针对某个网段下的机器进行特定内容推送，进而扩展该系统的可用性。
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
            该项目是面向群众的一个政府政务服务办事系统。主要分为终端办事系统、移动端办事系统和数据展示系统。整个项目的界面主要采用的是vue来做架构，通过websocket与小程序建立连接来支持小程序登录，用websocket的时候通过一个心跳检测来减少因断线产生的异常，通过canvas来实现人脸截图支持人脸登录。在数据展示系统通过echarts和websocket实现数据图表的实时更新。整个项目通过node来实现接口转发和第三方登录。
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: '数据可视化监控平台',
          secondParam: '前端',
          thirdParam: '2018.8 - 2019.11',
          content: `
            该项目主要是做一个组件化的监控平台，主要运用vue、vuex和websocket，通过封装公有的可复用的组件化开发来使得可以根据不同现场的需求进行快速敏捷的开发。
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
