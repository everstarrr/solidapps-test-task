import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { LoadingScreen } from '@/pages/LoadingScreen/LoadingScreen';
import { useLaunchParams, miniApp, useSignal, setMiniAppHeaderColor, setMiniAppBackgroundColor } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { images } from './model';

export function App() {

  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [error, setError] = useState(null); // Состояние ошибки

  const preloadImages = (urls: string[]) => {
    return Promise.all(
      urls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Не удалось загрузить изображение: ${url}`));
        });
      })
    );
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(images);
        setIsImagesLoaded(true);
      } catch (err: any) {
        setError(err);
      }
    };

    loadImages();
  }, []);

  let lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (isImagesLoaded) {
      WebApp.ready()
      WebApp.disableVerticalSwipes()
      WebApp.expand()
      setMiniAppHeaderColor('#000000')
      setMiniAppBackgroundColor("#000000")
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isImagesLoaded]);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      {progress === 100 ?
        <IndexPage /> :
        <LoadingScreen progress={progress} />
      }
    </AppRoot>
  );
}
