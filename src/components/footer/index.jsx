import { footerImages, footerLinks } from '@/common/localData';
import styles from './index.module.scss';
export default function Footer() {
  const FooterLink = ({ item }) => {
    return (
      <>
        <a href={item.link}>{item.title}</a>
        <span className='line'>|</span>
      </>
    );
  };
  const FooterImage = ({ item }) => {
    return (
      <li className='item'>
        <a
          href={item.link}
          rel='noopener noreferrer'
          target='_blank'
          className='link'
        >
          {' '}
        </a>
        <span className='title'></span>
      </li>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className='footer-content w980'>
        <div className='footer-left'>
          <p className='copy'>
            {footerLinks.map(item => (
              <FooterLink key={item.title} item={item} />
            ))}
          </p>
          <p>
            <span className='footer-company'>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
          </p>
          <p>
            <span className='footer-alert'>
              违法和不良信息举报电话：0571-89853516
            </span>
            <span>举报邮箱：ncm5990@163.com</span>
          </p>
          <p>
            <span>粤B2-20090191-18</span>
            <span className='footer-manage-system'>
              工业和信息化部备案管理系统网站
            </span>
            <span>浙公网安备 33010902002564号</span>
          </p>
        </div>
        <ul className='footer-right'>
          {footerImages.map(item => (
            <FooterImage key={item.link} item={item} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
