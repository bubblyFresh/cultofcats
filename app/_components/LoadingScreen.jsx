// components/LoadingScreen.js
import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css'; // Adjust the path as necessary

const LoadingScreen = ({ minDisplayTime = 1500 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the loader is displayed for at least minDisplayTime milliseconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  if (!loading) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingScreen;