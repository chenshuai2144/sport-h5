import styles from './index.css';

export default function ({}) {
  return (
    <div className={styles.normal}>
      <img
        width="100%"
        style={{
          position: 'relative',
          top: '-0.4rem',
        }}
        src="https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/a1x6h-44tp3.webp"
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
    </div>
  );
}
