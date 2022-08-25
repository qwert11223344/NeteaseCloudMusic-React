import {
  CrownOutlined,
  LogoutOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined
} from '@ant-design/icons';
export const headerLinks = [
  {
    title: '发现音乐',
    link: '/discover'
  },
  {
    title: '我的音乐',
    link: '/mine'
  },
  {
    title: '朋友',
    link: '/friend'
  },
  {
    title: '商城',
    link: 'https://music.163.com/store/product'
  },
  {
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/'
  },
  {
    title: '下载客户端',
    link: 'https://music.163.com/#/download'
  }
];
export const searchCategories = [
  {
    title: '单曲',
    link: '/search?type=1'
  },
  {
    title: '歌手',
    link: '/search?type=100'
  },
  {
    title: '专辑',
    link: '/search?type=10'
  },
  {
    title: '视频',
    link: '/search?type=1014'
  },

  {
    title: '歌单',
    link: '/search?type=1000'
  },
  {
    title: '主播电台',
    link: '/search?type=1009'
  },
  {
    title: '用户',
    link: '/search?type=1002'
  },
  {
    title: '歌词',
    link: '/search?type=1006'
  }
];
export const loginMenu = [
  {
    icon: <UserOutlined />,

    label: '我的主页',
    to: '/',
    key: 1
  },
  {
    icon: <MailOutlined />,
    label: '我的信息',
    to: '/',
    key: 2
  },
  {
    icon: <SmileOutlined />,
    label: '我的等级',
    to: '/',
    key: 3
  },
  {
    icon: <CrownOutlined />,
    label: 'vip会员',
    to: '/',
    key: 4
  },
  {
    icon: <SettingOutlined />,
    label: '个人设置',
    to: '/',
    key: 5
  },
  {
    icon: <SafetyCertificateOutlined />,
    label: '实名认证',
    to: '/',
    key: 6
  },
  {
    icon: <LogoutOutlined />,
    label: '退出',
    to: '/',
    key: 7
  }
];

export const footerLinks = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service'
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy'
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children'
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html'
  },
  {
    title: '意见反馈',
    link: '#'
  }
];

export const footerImages = [
  {
    link: 'https://music.163.com/st/userbasic#/auth'
  },
  {
    link: 'https://music.163.com/recruit'
  },
  {
    link: 'https://music.163.com/web/reward'
  },
  {
    link: 'https://music.163.com/uservideo#/plan'
  }
];
export const discoverNav = [
  {
    title: '推荐',
    link: '/discover/recommend'
  },
  {
    title: '排行榜',
    link: '/discover/toplist'
  },
  {
    title: '歌单',
    link: '/discover/playlist'
  },
  {
    title: '主播电台',
    link: '/discover/djradio'
  },
  {
    title: '歌手',
    link: '/discover/artist'
  },
  {
    title: '每日推荐',
    link: '/discover/album'
  }
];
// 歌手分类
export const artistCategories = [
  {
    id: 1,
    title: '推荐',
    area: -1,
    artists: [
      {
        name: '推荐歌手',
        type: -1,
        url: '/discover/artist',
        id: 0
      }
      // {
      //   name: '入驻歌手',
      //   type: 2,
      //   url: '#/discover/artist?cat=5001',
      //   dataPath: '/artist/list?cat=5001'
      // }
    ]
  },
  {
    id: 2,
    title: '华语',
    area: 7,
    artists: [
      {
        name: '华语男歌手',
        url: '/discover/artist?type=1&area=7',
        type: 1
      },
      {
        name: '华语女歌手',
        url: '/discover/artist?type=2&area=7',
        type: 2
      },
      {
        name: '华语组合/乐队',
        url: '/discover/artist?type=3&area=7',
        type: 3
      }
    ]
  },
  {
    id: 3,
    title: '欧美',
    area: 96,
    artists: [
      {
        name: '欧美男歌手',
        url: '/discover/artist?type=1&area=96',
        type: 1
      },
      {
        name: '欧美女歌手',
        url: '/discover/artist?type=2&area=96',
        type: 2
      },
      {
        name: '欧美组合乐队',
        url: '/discover/artist?type=3&area=96',
        type: 3
      }
    ]
  },
  {
    id: 4,
    title: '日本',
    area: 8,
    artists: [
      {
        name: '日本男歌手',
        url: '/discover/artist?type=1&area=8',
        type: 1
      },
      {
        name: '日本女歌手',
        url: '/discover/artist?type=2&area=8',
        type: 2
      },
      {
        name: '日本组合/乐队',
        url: '/discover/artist?type=3&area=8',
        type: 3
      }
    ]
  },
  {
    id: 5,
    title: '韩国',
    area: 16,
    artists: [
      {
        name: '韩国男歌手',
        url: '/discover/artist?type=1&area=16',
        type: 1
      },
      {
        name: '韩国女歌手',
        url: '/discover/artist?type=2&area=16',
        type: 2
      },
      {
        name: '韩国组合/乐队',
        url: '/discover/artist?type=3&area=16',
        type: 3
      }
    ]
  },
  {
    id: 6,
    title: '其他',
    area: 0,
    artists: [
      {
        name: '其他男歌手',
        url: '/discover/artist?type=1&area=0',
        type: 1
      },
      {
        name: '其他女歌手',
        url: '/discover/artist?type=2&area=0',
        type: 2
      },
      {
        name: '其他组合乐队',
        url: '/discover/artist?type=3&area=0',
        type: 3
      }
    ]
  }
];
//姓氏
export const surname = [
  { label: '热门', value: '' },
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
  { label: 'E', value: 'E' },
  { label: 'F', value: 'F' },
  { label: 'G', value: 'G' },
  { label: 'H', value: 'H' },
  { label: 'I', value: 'I' },
  { label: 'J', value: 'J' },
  { label: 'K', value: 'K' },
  { label: 'L', value: 'L' },
  { label: 'M', value: 'M' },
  { label: 'N', value: 'N' },
  { label: 'O', value: 'O' },
  { label: 'P', value: 'P' },
  { label: 'Q', value: 'Q' },
  { label: 'R', value: 'R' },
  { label: 'S', value: 'S' },
  { label: 'T', value: 'T' },
  { label: 'U', value: 'U' },
  { label: 'V', value: 'V' },
  { label: 'W', value: 'W' },
  { label: 'X', value: 'X' },
  { label: 'Y', value: 'Y' },
  { label: 'Z', value: 'Z' }
];
