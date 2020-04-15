import {HashGenerator} from '@/config/hashGenerator.js';
export default {
  Brief: {
    name: 'Abson Wong',
    position: 'web前端工程师',
    location: '广东广州',
    experience: '三年',
    age: 24,
    degree: '本科'
  },
  selfInfo: [
    {
      title: 'Contact',
      name: '联系方式',
      id: 'CONTACT',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/contact/contact-phone.png'), key: 'phone', value: '1860***3412', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/contact/contact-mail.png'), key: 'mail', value: 'luo_sj@163.com', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/social/social-wechat.png'), key: 'wechat', value: 'lsj-weicinhao', id: new HashGenerator().getHashValue()}
      ]
    },
    {
      title: 'Social',
      name: '作品地址',
      id: 'SOCIAL',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/social/social-github.png'), key: 'github', value: 'github.com/luosijie', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/social/social-dribbble.png'), key: 'dribbble', value: 'dribbble.com/luosj', id: new HashGenerator().getHashValue()}
      ]
    },
    {
      title: 'Skill',
      name: '技能',
      id: 'SKILL',
      icon: require('@/assets/image/contact/contact-title.png'),
      children: [
        {icon: require('@/assets/image/skill/skill-vue.png'), key: 'vue', value: 'Vue', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/skill/skill-node.png'), key: 'node', value: 'Node', id: new HashGenerator().getHashValue()},
        {icon: require('@/assets/image/skill/skill-mongo.png'), key: 'mongodb', value: 'MongoDB', id: new HashGenerator().getHashValue()}
      ]
    }
  ],
  AboutMe: `
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
  Education: [
    {school: 'Minjiang University', major: 'History', date: '2011.9-2015.6', description: ''}
  ],
  WorkingExperience: [
    {
      company: 'Google',
      position: 'UI designer',
      date: '2015.1-2016.3',
      description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
                libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
                sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
                Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
                vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
                gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
                lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
                In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
                magna est finibus tortor, ultricies accumsan diam lorem non neque.
            `
    },
    {
      company: 'Facebook',
      position: 'UI designer',
      date: '2015.1-2016.3',
      description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
                libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
                sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
                Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
                vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
                gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
                lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
                In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
                magna est finibus tortor, ultricies accumsan diam lorem non neque.
            `
    },
    {
      company: 'Airbnb',
      position: 'UI designer',
      date: '2015.1-2016.3',
      description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
                libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
                sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
                Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
                vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
                gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
                lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
                In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
                magna est finibus tortor, ultricies accumsan diam lorem non neque.
            `
    },
    {
      company: 'Twitter',
      position: 'UI designer',
      date: '2015.1-2016.3',
      description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
                libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla 
                sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. 
                Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat 
                vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec 
                gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam 
                lorem non neque. sim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. 
                In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, 
                magna est finibus tortor, ultricies accumsan diam lorem non neque.
            `
    }
  ],
  titleName: [
    ['CONTACT', '联系方式'],
    ['SOCIAL', '作品地址'],
    ['Skill', '技能'],
    ['About me', '关于我'],
    ['Education', '教育'],
    ['Working Experience', '工作经验']
  ]
};