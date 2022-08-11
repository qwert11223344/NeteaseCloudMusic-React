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
