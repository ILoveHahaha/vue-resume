import {HashGenerator} from '@/config/hashGenerator.js';
export default {
  brief: {
    name: 'Abson Wong',
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
        {icon: require('@/assets/image/contact/contact-phone.png'), value: '1860***3412', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/contact/contact-mail.png'), value: 'luo_sj@163.com', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/social/social-wechat.png'), value: 'lsj-weicinhao', id: new HashGenerator().getHashValue()}
      ]
    },
    {
      title: 'Social',
      name: '作品地址',
      id: 'SOCIAL',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/social/social-github.png'), value: 'github.com/luosijie', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/social/social-dribbble.png'), value: 'dribbble.com/luosj', id: new HashGenerator().getHashValue()}
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
        {icon: require('@/assets/image/skill/skill-mongo.png'), value: 'MongoDB', id: new HashGenerator().getHashValue()}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
            libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
            sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
            Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
            vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
            gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
            lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
            In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
            magna est finibus tortor, ultricies accumsan diam lorem non neque.
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
          firstParam: 'Minjiang University',
          secondParam: 'History',
          thirdParam: '2011.9-2015.6',
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
          firstParam: 'Google',
          secondParam: 'UI designer',
          thirdParam: '2015.1-2016.3',
          content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
            libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
            sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
            Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
            vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
            gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
            lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
            In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
            magna est finibus tortor, ultricies accumsan diam lorem non neque.
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: 'Facebook',
          secondParam: 'UI designer',
          thirdParam: '2015.1-2016.3',
          content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
            libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
            sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
            Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
            vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
            gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
            lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
            In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
            magna est finibus tortor, ultricies accumsan diam lorem non neque.
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: 'Airbnb',
          secondParam: 'UI designer',
          thirdParam: '2015.1-2016.3',
          content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
            libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
            sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
            Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
            vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
            gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
            lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
            In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
            magna est finibus tortor, ultricies accumsan diam lorem non neque.
          `,
          paramStatus: true,
          contentStatus: true
        },
        {
          id: new HashGenerator().getHashValue(),
          firstParam: 'Twitter',
          secondParam: 'UI designer',
          thirdParam: '2015.1-2016.3',
          content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
            libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
            sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
            Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
            vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
            gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
            lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
            In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
            magna est finibus tortor, ultricies accumsan diam lorem non neque.
          `,
          paramStatus: true,
          contentStatus: true
        }
      ]
    }
  ]
};
