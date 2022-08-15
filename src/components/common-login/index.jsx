import { Button, Modal } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowLogin } from '@/store/action/login';
import { useRef } from 'react';
import { useEffect } from 'react';
import qrCodeApi from '@/api/qrCodeApi';
import { useState } from 'react';
export default function CommonLogin() {
  const disPatch = useDispatch();
  const loginWrapper = useRef('');
  const { isShowLogin } = useSelector(state => state.loginReducer);
  const [qrUnikey, setQrUnikey] = useState('');
  const [qrimg, setQrimg] = useState('');
  const [qrCodeInfo, setQrCodeInfo] = useState({});
  const timer = useRef(0);
  useEffect(() => {
    //二维码key
    const getQrKey = async () => {
      const {
        data: { unikey }
      } = await qrCodeApi.getQrCodeKey();
      setQrUnikey(unikey);
    };
    isShowLogin && getQrKey();
  }, [isShowLogin]);
  useEffect(() => {
    //创建二维码
    const createQrCode = async () => {
      const {
        data: { qrimg }
      } = await qrCodeApi.createQrCode(qrUnikey);
      setQrimg(qrimg);
    };
    //检测二维码状态
    const checkQrCode = async () => {
      const qrCodeInfo = await qrCodeApi.checkQrCode(qrUnikey);
      console.log(qrCodeInfo);
      setQrCodeInfo(qrCodeInfo);
    };
    isShowLogin &&
      qrUnikey &&
      (function () {
        createQrCode();
        timer.current = setInterval(checkQrCode, 1000);
      })();
    return () => {
      clearInterval(timer.current);
    };
  }, [qrUnikey, isShowLogin]);
  const defaultModal = () => {
    return (
      <>
        <div className='login-container'>
          {qrCodeInfo.code === 802 ? <AlreadyScan /> : <NotScan />}
        </div>
        <div className='login-footer'>
          <Button className='btn' shape='round'>
            选择其他登录方式
          </Button>
        </div>
      </>
    );
  };

  const NotScan = () => {
    return (
      <>
        <div className='login-container-left'>
          <img
            src={`https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png`}
            alt=''
          />
        </div>
        <div className='login-container-right'>
          <h2>扫码登录</h2>
          <img src={qrimg} alt='' className='qrImg' />
          {qrCodeInfo && qrCodeInfo.code !== 801 && (
            <div className='show-qr-code-state'>
              <span>{qrCodeInfo.message}</span>
            </div>
          )}
          <p>
            使用<a href='https://music.163.com/#/download'>网易云音乐APP</a>
            扫码
          </p>
        </div>
      </>
    );
  };

  const AlreadyScan = () => {
    return (
      <div className='alreadyScan'>
        <img
          src={`https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9765284460/1b1d/9f46/2fa3/2d5d07bb5fcf8c24c1ad788c923ef313.png`}
          alt=''
        />
        <h2>扫码成功</h2>
        <p>请在手机上确认登录</p>
      </div>
    );
  };

  return (
    <div className={styles.commonLogin}>
      <div className='login-wrapper' ref={loginWrapper}></div>
      <Modal
        title='登录'
        centered
        footer={null}
        visible={isShowLogin}
        onCancel={() => {
          disPatch(setIsShowLogin(false));
          setQrUnikey('');
          setQrimg('');
          setQrCodeInfo({});
        }}
        maskClosable={false}
        getContainer={loginWrapper.current}
        destroyOnClose={true}
      >
        {defaultModal()}
      </Modal>
    </div>
  );
}
