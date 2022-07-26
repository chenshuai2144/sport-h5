import { useNavigate } from 'alita';
import React, { useState } from 'react';
import styles from './index.css';

const DISABLE_BG =
  'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/已完成 (1).png';
const SHOW_BG =
  'https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/基本v (1).png';

const DisableButton: React.FC<{ text: string; disabled?: boolean }> = (
  props,
) => {
  return (
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        width: '1.6rem',
        height: '0.9rem',
        display: 'flex',
        alignItems: 'end',
      }}
    >
      <img width={80} src={props.disabled ? DISABLE_BG : SHOW_BG} />
      <span
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          fontSize: '0.32rem',
          color: '#fff',
          left: 0,
          top: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.disabled ? '已完成' : props.text}
      </span>
    </div>
  );
};
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

export default function ({}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
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
          src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/a1x6h-44tp3.webp"
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
          justifyContent: 'space-between',
        }}
      >
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
        <img
          src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%2020.webp"
          alt="get"
          style={{
            width: '3rem',
            top: '8rem',
            cursor: 'pointer',
          }}
        />
      </div>

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
            transform: showModal ? 'translateY(0%)' : 'translateY(100%)',
          }}
          onClick={() => {
            setShowModal(false);
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
              "url('https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/aj3qw-aw3v7.webp')",
            backgroundSize: '100% 100%',
            height: '11.6rem',
            marginBottom: '-1rem',
            transform: showModal ? 'translateY(0%)' : 'translateY(100%)',
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
              height: '1.8rem',
              borderRadius: '0.24rem',
              position: 'relative',
              padding: '0.42rem',
              color: '#ffe8d5',
              fontSize: '0.40rem',
              textAlign: 'left',
              fontWeight: 'bold',
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
            我的助力值
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
                  width: '30%',
                  height: '120%',
                  transition: 'all 0.5s',
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
                src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/去签到.png"
                width={80}
                alt="去签到"
              />
            }
          />
          <Item
            icon="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/分享 (1).png"
            title="成功分享链接到好友"
            subTitle="+0.3 助力值"
            button={<DisableButton text="去分享" />}
          />
          <Item
            icon="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/分享 (1).png"
            title="跑步步数达3333步及以上"
            subTitle="+0.5 助力值"
            button={<DisableButton text="去运动" />}
          />
          <img
            src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/组 20 (1).png"
            style={{
              width: '3.2rem',
            }}
            alt="参与抽奖"
          />
        </div>
      </div>
    </div>
  );
}
