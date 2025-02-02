import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { LoadingScreen } from '@/pages/LoadingScreen/LoadingScreen';
import { useLaunchParams, miniApp, useSignal, setMiniAppHeaderColor } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';

export function App() {
  WebApp.ready()
  WebApp.disableVerticalSwipes()
  WebApp.expand()

  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const [progress, setProgress] = useState(1);

  useEffect(() => {
    setMiniAppHeaderColor('secondary_bg_color')
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

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
