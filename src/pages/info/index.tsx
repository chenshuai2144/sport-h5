// @ts-ignore
import { useNavigate } from 'alita';
import { Toast } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import styles from './index.css';

/**
 * 简单封装的弹框
 * @param props
 * @returns
 */
const Modal: React.FC<{
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  children: React.ReactNode;
  height: string;
  title: string;
}> = (props) => {
  return (
    <div>
      {props.visible && (
        <div
          style={{
            height: '100%',
            position: 'fixed',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'flex-end',
          }}
          onClick={() => {
            props.onVisibleChange(false);
          }}
        />
      )}
      <div
        style={{
          height: '100%',
          position: 'fixed',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'flex-end',
          transform: props.visible ? 'translateY(0%)' : 'translateY(100%)',
        }}
        onClick={() => {
          props.onVisibleChange(false);
        }}
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        style={{
          boxSizing: 'border-box',
          position: 'fixed',
          bottom: '0.01rem',
          background: '#fff',
          backgroundImage:
            "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/fHYGTZB3Bn0AAAAAAAAAAAAAFl94AQBr')",
          backgroundSize: '100% auto',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
          height: props.height || '9.2rem',
          marginBottom: '-1rem',
          transform: props.visible ? 'translateY(0%)' : 'translateY(100%)',
          transition: 'all 0.3s ease-in-out',
          width: '100%',
          borderTopLeftRadius: '0.56rem',
          borderTopRightRadius: '0.56rem',
          padding: '0.24rem 0.82rem',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '0.65rem',
            marginBottom: '0.44rem',
          }}
        >
          <img
            src="https://gw.alipayobjects.com/zos/bmw-prod/837b7a82-bfbd-478c-a9df-0f7945e71377.svg"
            style={{
              width: '0.3rem',
              height: '0.3rem',
              position: 'absolute',
              top: '0.4rem',
              left: '0.4rem',
            }}
            onClick={() => props.onVisibleChange(false)}
          />
          <div
            style={{
              fontSize: '0.4rem',
            }}
          >
            {props.title}
          </div>
        </div>
        <div
          style={{
            fontSize: '0.32rem',
            textAlign: 'left',
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

const BaoMingModal: React.FC<{
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
}> = (props) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState(() => {
    return localStorage.getItem('user-phone-number');
  });
  const [info, setInfo] = useState<{
    name: undefined | string;
    phoneNumber: undefined | string;
    wechat: undefined | string;
    address: undefined | string;
  }>({
    name: undefined,
    phoneNumber: undefined,
    wechat: undefined,
    address: undefined,
  });
  const [errorInfo, setErrorInfo] = useState('');
  useEffect(() => {
    if (!phoneNumber) return;
    setInfo({
      name: undefined,
      phoneNumber: undefined,
      wechat: undefined,
      address: undefined,
    });
  }, [phoneNumber]);
  return (
    <>
      {props.visible && (
        <div
          style={{
            height: '100%',
            position: 'fixed',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'flex-end',
          }}
          onClick={() => {
            props.onVisibleChange(false);
          }}
        />
      )}
      <div
        style={{
          position: 'fixed',
          top: !props.visible ? 0 : '12%',
          width: '95%',
          margin: '0 auto',
          left: '2.5%',
          zIndex: 99,
          transition: 'all 0.3s ease-in-out',
          transform: props.visible ? 'translateY(0%)' : 'translateY(140%)',
        }}
      >
        <div
          style={{
            width: '100%',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            padding: '0.8rem 0.8rem',
            paddingTop: '2.2rem',
            paddingBottom: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.24rem',
            backgroundImage:
              'url("https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/fhq6S6PFlNUAAAAAAAAAAAAAFl94AQBr")',
          }}
        >
          <div
            style={{
              fontSize: '0.24rem',
              color: '#fa541c',
              marginTop: '-0.24rem',
              height: '0.4rem',
            }}
          >
            {errorInfo}
          </div>
          <input
            style={{
              background: '#F4F4F4',
              border: '1px solid #E8E8E8',
              boxShadow: 'none',
              outline: 'none',
              width: '100%',
              height: '0.8rem',
              paddingLeft: '0.2rem',
            }}
            placeholder="姓名"
            onChange={(e) => {
              setInfo((info) => ({ ...info, name: e.target.value }));
            }}
          />
          <input
            style={{
              background: '#F4F4F4',
              border: '1px solid #E8E8E8',
              boxShadow: 'none',
              outline: 'none',
              width: '100%',
              paddingLeft: '0.2rem',
              height: '0.8rem',
            }}
            placeholder="手机号码"
            onChange={(e) => {
              setInfo((info) => ({ ...info, phoneNumber: e.target.value }));
            }}
          />
          <input
            style={{
              background: '#F4F4F4',
              border: '1px solid #E8E8E8',
              boxShadow: 'none',
              outline: 'none',
              width: '100%',
              height: '0.8rem',
              paddingLeft: '0.2rem',
            }}
            placeholder="微信账号"
            onChange={(e) => {
              setInfo((info) => ({ ...info, wechat: e.target.value }));
            }}
          />
          <textarea
            style={{
              background: '#F4F4F4',
              border: '1px solid #E8E8E8',
              boxShadow: 'none',
              paddingLeft: '0.2rem',
              outline: 'none',
              width: '100%',
            }}
            rows={5}
            onChange={(e) => {
              setInfo((info) => ({ ...info, address: e.target.value }));
            }}
            placeholder="收货地址"
          />
        </div>

        <img
          style={{
            width: '4rem',
          }}
          onClick={() => {
            setErrorInfo('');
            // 任何一个必填都不能点
            if (Object.keys(info).some((key) => !info?.[key as 'name'])) {
              setErrorInfo('所有的表单项都需要输入哦');
              return;
            }
            if (info.phoneNumber) {
              localStorage.setItem('user-phone-number', info.phoneNumber);
              setPhoneNumber(info.phoneNumber);
              const toast = Toast.show({
                icon: 'loading',
                content: '正在记录内容...',
              });
              fetch('https://proapi.azurewebsites.net/sport/addr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info),
              })
                .then(() => {
                  toast.close();
                  navigate('/');
                })
                .catch(() => {
                  return;
                });
            }
          }}
          alt="完成"
          src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/HVf-TpG9PvkAAAAAAAAAAAAAFl94AQBr"
        />
      </div>
    </>
  );
};

export default function ({}) {
  const [ruleModal, setRuleModal] = useState(false);
  const [choujiangModal, setChoujiangModal] = useState(false);
  const [baomingModal, setBaomingModal] = useState(false);
  const hasPhoneNumber = localStorage.getItem('user-phone-number');
  useEffect(() => {
    if (hasPhoneNumber) {
      document.title = '查看规则 - 线上马拉松';
      return;
    }
    document.title = '报名 - 线上马拉松';
  }, []);
  return (
    <div className={styles.normal}>
      <div
        style={{
          position: 'absolute',
          top: '25.6%',
          right: '0%',
          width: '100%',
          height: '0.5rem',
          zIndex: 9,
        }}
        onClick={() => {
          setRuleModal(true);
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '27.4%',
          right: '0%',
          width: '100%',
          height: '0.5rem',
          zIndex: 9,
        }}
        onClick={() => {
          setChoujiangModal(true);
        }}
      />
      <img
        width="100%"
        height="100%"
        style={{
          position: 'relative',
          top: '-0.4rem',
        }}
        src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/KgXiQqPLxOQAAAAAAAAAAAAAFl94AQBr"
      />
      {hasPhoneNumber ? (
        ''
      ) : (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            backgroundColor: '#62a7ef',
            width: '100%',
            height: '1.28rem',
            color: '#fff',
            fontSize: '0.48rem',
            fontWeight: 'bold',
            lineHeight: '1.28rem',
          }}
          onClick={() => {
            setBaomingModal(true);
          }}
        >
          马上报名
        </div>
      )}
      <Modal
        visible={ruleModal}
        title="活动规则"
        height="9.4rem"
        onVisibleChange={setRuleModal}
      >
        <div
          style={{
            fontSize: '0.32rem',
            textAlign: 'left',
          }}
        >
          <p>报名参与“线上马拉松活动”</p>
          <p>每成功打卡一天累计助力值 +0.2</p>
          <p>单日跑步步数达3333步及以上累计助力值 +0.8</p>
          <p>单日助力值上限 1</p>
        </div>
      </Modal>

      <Modal
        visible={choujiangModal}
        title="抽奖规则"
        height="11.4rem"
        onVisibleChange={setChoujiangModal}
      >
        <div
          style={{
            fontSize: '0.32rem',
            textAlign: 'left',
          }}
        >
          <p>
            凭借助力值可获得相应奖池抽奖机会累计助力指数达到 10，即可参与价值 99
            元“三衢味鲜辣运动包”一次抽奖活动；
          </p>
          <p>
            累计助力值指数达到 20 ，即可参与价值 99 元、 388
            元“三衢味鲜辣运动包”两次抽奖活动；
          </p>
          <p>
            累计助力值指数达到 25，即可价值 99 元、388 元、588
            元“三衢味鲜辣运动包”三次抽奖活动；
          </p>
          <p>
            累计助力值指数达到 30，即可价值 99 元、388 元、588 元、888
            元“三衢味鲜辣运动包”四次抽奖活动。
          </p>
          <p>10月10日 20:00-24:00 开奖</p>
        </div>
      </Modal>
      {hasPhoneNumber ? (
        ''
      ) : (
        <BaoMingModal
          visible={baomingModal}
          onVisibleChange={() => setBaomingModal(false)}
        />
      )}
    </div>
  );
}
