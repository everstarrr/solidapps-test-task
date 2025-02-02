import { ResourceItem } from '@/components/ResourceItem/ResourceItem';
import styles from './IndexPage.module.scss'
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { useState } from 'react';
import clsx from 'clsx';
import avatar from '../../../assets/avatar.png'
import robot from '../../../assets/icons/robot.svg'
import energy from '../../../assets/icons/energy.svg'
import time from '../../../assets/icons/time.svg'
import radar from '../../../assets/icons/radar.svg'
import market from '../../../assets/icons/market.svg'
import tasks from '../../../assets/icons/tasks.svg'
import friends from '../../../assets/icons/friends.svg'

export const IndexPage = () => {

  const [planet, setPlanet] = useState<'default' | 'magma'>('default')

  const handleClick = () => {
    if (planet === "default")
      setPlanet('magma')
    else
      setPlanet("default")
  }

  return (
    <>
      <main className={clsx(styles.main, planet === 'default' ? styles.planetDefault : styles.planetMagma)}>
        <section className={styles.infoSection}>
          <div className={styles.top}>
            <div className={styles.first}>
              <div className={styles.nameBlock}>
                <img src={avatar} alt='Avatar' />
                <h1>Max</h1>
              </div>
              <div className={styles.activeRobots}>
                <div className={styles.robotsImgContainer}>
                  <img src={robot} alt='Robot' />
                </div>
                <div className={styles.robotsCountContainer}>
                  <p className={styles.robotsCount}>3 / 12</p>
                  <p className={styles.activeRobots}>active robots</p>
                </div>
              </div>
            </div>
            <div className={styles.second}>
              <ResourceItem color='blue' text='4.2k' />
              <ResourceItem color='green' text='6.7k' />
              <ResourceItem color='red' text='5.1k' />
              <ResourceItem color='coin' text='2.2M' />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.energyInfo}>
              <div className={styles.energyBlock}>
                <div className={styles.energyIconBlock}>
                  <img src={energy} alt='Energy' />
                </div>
                <div className={styles.energyTextBlock}>
                  <p className={styles.energyTextTitle}>1.1k / 3.5k</p>
                  <p className={styles.energyTextDescription}>amount of energy</p>
                </div>
              </div>
              <div className={styles.energyBlock}>
                <div className={styles.energyIconBlock}>
                  <img src={time} alt='Time' />
                </div>
                <div className={styles.energyTextBlock}>
                  <p className={styles.energyTextTitle}>00:12:56</p>
                  <p className={styles.energyTextDescription}>time until energy ends</p>
                </div>
              </div>
            </div>
            <ProgressBar value={40} />
          </div>
        </section>
        <button className={styles.chargeButton}></button>
      </main>
      <footer className={styles.footer}>
        <nav className={styles.navbar}>
          <div className={styles.navbarItem}>
            <img src={radar} alt='Radar' />
            <p>Radar</p>
          </div>
          <div className={styles.navbarItem}>
            <img src={market} alt='Market' />
            <p>Market</p>
          </div>
          <div className={styles.starshipItem}>
            <div className={styles.titleBg} />
            <p className={styles.title}>Starship</p>
            <div className={styles.glow} />
          </div>
          <div className={styles.navbarItem}>
            <img src={tasks} alt='Tasks' />
            <p>Tasks</p>
          </div>
          <div className={styles.navbarItem}>
            <img src={friends} alt='Friends' />
            <p>Friends</p>
          </div>
        </nav>
        <button onClick={handleClick} className={styles.starshipIcon} />
      </footer>
    </>
  );
};