import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { LoadingScreen } from '@/pages/LoadingScreen/LoadingScreen';
import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  WebApp.ready()
  WebApp.disableVerticalSwipes()
  WebApp.expand()

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
