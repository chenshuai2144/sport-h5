import { useNavigate } from 'alita';
import { Toast } from 'antd-mobile';
import React, { useEffect, useRef, useState } from 'react';

import styles from './index.css';

const DISABLE_BG =
  'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/hvyNRr5Nf3oAAAAAAAAAAAAAFl94AQBr';

/**
 * 自带的icon配置
 * @param props
 * @returns
 */
const Icon: React.FC<{ url: string; size?: string }> = (props) => {
  return (
    <div
      style={{
        backgroundColor: '#ffecbb',
        borderRadius: '1rem',
        width: '1rem',
        height: '1rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        margin: '0.1rem',
      }}
    >
      <img
        src={props.url}
        style={{
          width: props.size || '0.8rem',
          height: props.size || '0.8rem',
          marginBottom: '-0.1rem',
        }}
      />
    </div>
  );
};

/**
 * 每个活动项
 * @param props
 * @returns
 */
const Item: React.FC<{
  button: React.ReactNode;
  title: string;
  subTitle: string;
  icon: string;
  size?: string;
}> = (props) => {
  return (
    <div
      style={{
        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.24rem',
        alignItems: 'center',
        borderRadius: '0.24rem',
        marginBottom: '0.18rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Icon url={props.icon} size={props.size} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '0.12rem',
          }}
        >
          <div
            style={{
              color: '#8c492a',
              fontSize: '0.3rem',
              fontWeight: 'bold',
              marginBottom: '0.12rem',
            }}
          >
            {props.title}
          </div>
          <div
            style={{
              color: '#c7683c',
              fontSize: '0.2rem',
            }}
          >
            {props.subTitle}
          </div>
        </div>
      </div>
      {props.button}
    </div>
  );
};

const qiandaoObj = {
  url: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/g8vdQ4T69XgAAAAAAAAAAAAAFl94AQBr',
  btnText: '我知道了',
};

const SuccessModal: React.FC<{
  url: string;
  btnText: string;
  onClose: () => void;
}> = (props) => {
  return (
    <>
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
          props.onClose();
        }}
      />
      <div
        style={{
          position: 'fixed',
          zIndex: 999,
          top: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          animation: 'bounceIn 0.5s cubic-bezier(.23,1,.32,1) ',
          gap: 12,
          width: '100%',
        }}
      >
        <img
          src={props.url}
          style={{
            width: '7rem',
          }}
        />
        <img
          onClick={() => {
            props.onClose();
          }}
          style={{
            width: '3rem',
          }}
          src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/WT_gSo4oRdcAAAAAAAAAAAAAFl94AQBr"
        />
      </div>
    </>
  );
};

/**
 * 最重要的活动弹框
 * @param props
 * @returns
 */
const Modal: React.FC<{
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  openAction: (action: typeof qiandaoObj) => void;
}> = (props) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState<{
    isShare: boolean;
    isSign: boolean;
    isStep: boolean;
    shareCount: number;
    signCount: number;
    stepCount: number;
    total: number;
  }>();
  const infoRef = useRef<{
    isShare: boolean;
    isSign: boolean;
    isStep: boolean;
    shareCount: number;
    signCount: number;
    stepCount: number;
    total: number;
  }>();
  infoRef.current = info;
  const [progress, setProgress] = useState(0);
  const hasPhoneNumber = localStorage.getItem('user-phone-number');
  const reload = () => {
    fetch(
      `https://proapi.azurewebsites.net/sport/active?phone=${hasPhoneNumber}`,
    )
      .then((res) => res.json())
      .then((msg) => {
        setInfo(msg.data);
        setProgress(msg.data.total / 60);
      })
      .catch(() => {
        setInfo(info);
      });
  };

  useEffect(() => {
    // @ts-ignore
    wx.ready(() => {
      try {
        //需在用户可能点击分享按钮前就先调用
        // @ts-ignore
        wx.updateAppMessageShareData({
          title: '“鲜辣衢州 共富@未来”一起公益助跑', // 分享标题
          desc: '“鲜辣衢州 共富@未来”一起公益助跑', // 分享描述
          link: location.origin + '?phone=' + hasPhoneNumber,
          imgUrl:
            'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/跑步 (1).png', // 分享图标
          success: function () {},
        });
        // @ts-ignore
        wx.updateTimelineShareData({
          title: '“鲜辣衢州 共富@未来”一起公益助跑', // 分享标题
          desc: '“鲜辣衢州 共富@未来”一起公益助跑', // 分享描述
          link: location.origin + '?phone=' + hasPhoneNumber,
          imgUrl:
            'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/跑步 (1).png', // 分享图标
          success: function () {},
        });
      } catch (error) {}
    });

    if (!hasPhoneNumber) return;
    reload();
  }, []);
  return (
    <div>
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
          transform: props.visible ? 'translateY(0%)' : 'translateY(100%)',
        }}
        onClick={() => {
          props.onVisibleChange(false);
        }}
      />
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
            "url('https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/aj3qw-aw3v7.webp')",
          backgroundSize: '100% 100%',
          height: '12.2rem',
          marginBottom: '-1rem',
          transform: props.visible ? 'translateY(0%)' : 'translateY(100%)',
          transition: 'all 0.3s ease-in-out',
          width: '100%',
          borderTopLeftRadius: '0.56rem',
          borderTopRightRadius: '0.56rem',
          padding: '0.24rem',
          paddingTop: '1.2rem',
        }}
      >
        <div
          style={{
            backgroundColor: '#f8b551',
            height: '2.5rem',
            borderRadius: '0.24rem',
            position: 'relative',
            padding: '0.42rem',
            color: '#ffe8d5',
            fontSize: '0.32rem',
            textAlign: 'left',
            fontWeight: 'bold',
            marginBottom: '0.24rem',
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            border: '1px solid #ddd',
          }}
        >
          <img
            src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/个人图片.webp"
            alt="每日签到"
            style={{
              height: '1.4rem',
              position: 'absolute',
              left: 'calc(50% - 0.7rem)',
              top: '-0.7rem',
            }}
          />
          我的助力值 {info?.total || ''}
          <div
            style={{
              height: '0.2rem',
              borderRadius: '0.2rem',
              marginTop: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              background: '#A6100B',
              boxShadow:
                '0 10px 9px 0 rgba(0,0,0,0.24), inset 0 4px 3px 0 #FFFFFF, inset 0 0 7px 0 rgba(255,255,255,0.20)',
              backgroundImage:
                'url("https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/x86LSJL6TmoAAAAAAAAAAAAAFl94AQBr")',
            }}
          >
            <div
              style={{
                backgroundColor: '#F6A153',
                backgroundImage:
                  'url("https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/PTXETJ89W90AAAAAAAAAAAAAFl94AQBr")',
                width: `${progress}%`,
                height: '120%',
                transition: 'all 1.2s ease-in-out',
                borderRadius: '0.2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  position: 'absolute',
                  inset: 0,
                  background: '#fff',
                  opacity: 0,
                  animation:
                    'ant-progress-active 2.4s cubic-bezier(.23,1,.32,1) infinite',
                }}
              />
            </div>
            <div
              style={{
                left: 'calc(15% - 0.4rem)',
                position: 'absolute',
                fontSize: '0.28rem',
                top: '-0.15rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img
                style={{
                  width: '0.7rem',
                  height: '0.7rem',
                }}
                src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"
              />
              10
            </div>
            <div
              style={{
                left: 'calc(40% - 0.4rem)',
                position: 'absolute',
                fontSize: '0.28rem',
                top: '-0.15rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img
                style={{
                  width: '0.7rem',
                  height: '0.7rem',
                }}
                src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"
              />
              20
            </div>
            <div
              style={{
                left: 'calc(65% - 0.4rem)',
                position: 'absolute',
                fontSize: '0.28rem',
                top: '-0.15rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img
                style={{
                  width: '0.7rem',
                  height: '0.7rem',
                }}
                src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"
              />
              30
            </div>
            <div
              style={{
                left: 'calc(90% - 0.4rem)',
                position: 'absolute',
                fontSize: '0.28rem',
                top: '-0.15rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img
                style={{
                  width: '0.7rem',
                  height: '0.7rem',
                }}
                src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"
              />
              40
            </div>
          </div>
        </div>

        <Item
          size="0.6rem"
          icon="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/签到 (1).png"
          title="每日成功打卡"
          subTitle="+0.2助力值"
          button={
            <img
              src={
                info?.isSign
                  ? DISABLE_BG
                  : 'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/去签到.png'
              }
              style={{ width: '1.6rem' }}
              alt="去签到"
              onClick={() => {
                if (!hasPhoneNumber) {
                  Toast.show({
                    icon: 'fail',
                    content: '要先报名后才能开始打卡哦',
                  });
                  navigate('/info');
                  return;
                }
                if (info?.isSign) return;
                const toast = Toast.show({
                  icon: 'loading',
                  content: '正在签到中...',
                });
                fetch('https://proapi.azurewebsites.net/sport/sign', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    phone: hasPhoneNumber,
                  }),
                })
                  .then(() => {
                    reload();
                    toast.close();
                    props.openAction(qiandaoObj);
                  })
                  .catch(() => {
                    return;
                  });
              }}
            />
          }
        />

        <Item
          icon="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/跑步 (1).png"
          title="跑步步数达3333步及以上"
          subTitle="+0.8 助力值"
          button={
            // @ts-ignore
            <wx-open-launch-weapp
              id="launch-btn"
              username="gh_d3886c3e87eb"
              path="pagesCloud/pages/runData/runData"
              style={{
                width: '1.6rem',
                cursor: 'pointer',
              }}
            >
              <script type="text/wxtag-template">
                <img
                  style={{
                    width: '100%',
                  }}
                  src={
                    info?.isStep
                      ? DISABLE_BG
                      : 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/N7JcTKFje3AAAAAAAAAAAAAAFl94AQBr'
                  }
                />
              </script>
              {/* @ts-ignore */}
            </wx-open-launch-weapp>
          }
        />
        {(info?.total || 0) > 20 ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              onClick={() => {
                if (hasPhoneNumber) {
                  return;
                }

                navigate('/info');
              }}
              src={
                hasPhoneNumber
                  ? 'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/组 20 (1).png'
                  : 'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%201.webp'
              }
              style={{
                width: '3.2rem',
              }}
              alt="参与抽奖"
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default function ({}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [action, setActionOBJ] = useState<typeof qiandaoObj | undefined>(
    undefined,
  );
  useEffect(() => {
    document.title = '线上马拉松';
  }, []);
  const hasPhoneNumber = localStorage.getItem('user-phone-number');
  const setAction = (obj: typeof qiandaoObj | undefined) => {
    setShowModal(false);
    setActionOBJ(obj);
  };
  return (
    <>
      <img
        src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/g8vdQ4T69XgAAAAAAAAAAAAAFl94AQBr"
        style={{
          height: 1,
          width: 1,
          position: 'fixed',
          top: -999,
        }}
      />
      <img
        src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/G-y0SotXmNYAAAAAAAAAAAAAFl94AQBr"
        style={{
          height: 1,
          width: 1,
          position: 'fixed',
          top: -999,
        }}
      />
      <div className={styles.normal}>
        <div
          style={{
            position: 'absolute',
            top: '0.8rem',
            right: '0.5rem',
            display: 'flex ',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '0.28rem',
          }}
        >
          <img
            width="100%"
            style={{
              position: 'fixed',
              top: '-0.4rem',
              height: '1px',
            }}
            src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/KgXiQqPLxOQAAAAAAAAAAAAAFl94AQBr"
          />
          <img
            src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/个人图片.webp"
            alt="每日签到"
            style={{
              height: '1rem',
            }}
            onClick={() => {
              setShowModal(true);
            }}
          />
          每日签到
        </div>
        <img
          src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E5%9B%BE%E5%B1%82%202796.webp"
          alt="logo"
          style={{
            height: '1rem',
            position: 'absolute',
            top: '0.8rem',
            left: '0.5rem',
          }}
        />
        <div
          style={{
            paddingTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/logo.webp"
            style={{
              width: '6rem',
              marginRight: '-1.2rem',
            }}
          />
        </div>
        <div
          style={{
            padding: '0.5rem',
            paddingTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: hasPhoneNumber ? 'center' : 'space-between',
          }}
        >
          {hasPhoneNumber ? null : (
            <img
              src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%201.webp"
              alt="报名"
              style={{
                width: '3.2rem',
                top: '8rem',
                marginBottom: '-0.2rem',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/info')}
            />
          )}
          {/* @ts-ignore */}
          <wx-open-launch-weapp
            id="launch-btn"
            username="gh_d3886c3e87eb"
            path="pages/home/home"
            style={{
              width: '3rem',
              top: '8rem',
              cursor: 'pointer',
            }}
          >
            <script type="text/wxtag-template">
              <img
                src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%2020.webp"
                alt="get"
                style={{
                  width: '100%',
                  top: '8rem',
                  cursor: 'pointer',
                }}
              />
            </script>
            {/* @ts-ignore */}
          </wx-open-launch-weapp>
        </div>
      </div>
      <Modal
        visible={showModal}
        openAction={setAction}
        onVisibleChange={setShowModal}
      />
      {action && (
        <SuccessModal
          {...action}
          onClose={() => {
            setAction(undefined);
            setShowModal(true);
          }}
        />
      )}
    </>
  );
}
