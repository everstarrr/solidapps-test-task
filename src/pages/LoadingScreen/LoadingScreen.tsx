import { ProgressBar } from '@/components/ProgressBar/ProgressBar'
import styles from './LoadingScreen.module.scss'

type Props = {
    progress: number
}

export const LoadingScreen = ({ progress }: Props) => {
    return (
        <main className={styles.preloader}>
            <div className={styles.content}>
                <h1 className={styles.title}>Wars Stars: Expedition</h1>
                <section className={styles.loaderSection}>
                    <div className={styles.loader}>
                        Loading
                        <ProgressBar value={progress} />
                    </div>
                    <div className={styles.description}>
                        In the "friends" tab you can see statistics
                        on the number of referrals of 3 lines
                        and additional earnings from them
                    </div>
                </section>
            </div>
        </main>
    )
}