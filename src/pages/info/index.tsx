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

export default function ({}) {
  const [ruleModal, setRuleModal] = useState(false);
  const [choujiangModal, setChoujiangModal] = useState(false);
  useEffect(() => {
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
      >
        马上报名
      </div>
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
          <p>单日成功分享链接至好友累计助力值 +0.3</p>
          <p>单日跑步步数达3333步及以上累计助力值 +0.5</p>
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
            凭借助力值可获得相应奖池抽奖机会累计助力指数达到10，即可参与价值99元“三衢味鲜辣运动包”一次抽奖活动；
          </p>
          <p>
            累计助力值指数达到20，即可参与价值99元、388元“三衢味鲜辣运动包”两次抽奖活动；
          </p>
          <p>
            累计助力值指数达到25，即可价值99元、388元、588元“三衢味鲜辣运动包”三次抽奖活动；
          </p>
          <p>
            累计助力值指数达到30，即可价值99元、388元、588元、888元“三衢味鲜辣运动包”四次抽奖活动。
          </p>
        </div>
      </Modal>
    </div>
  );
}
