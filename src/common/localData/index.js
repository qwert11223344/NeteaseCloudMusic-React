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
