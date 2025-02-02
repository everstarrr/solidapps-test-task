import { ProgressBar } from '@/components/ProgressBar/ProgressBar'
import styles from './LoadingScreen.module.scss'
import { useTranslation } from 'react-i18next'

type Props = {
    progress: number
}

export const LoadingScreen = ({ progress }: Props) => {

    const { t } = useTranslation("");

    return (
        <main className={styles.preloader}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('loadingScreen.title')}</h1>
                <section className={styles.loaderSection}>
                    <div className={styles.loader}>
                        {t('loadingScreen.loading')}
                        <ProgressBar value={progress} />
                    </div>
                    <div className={styles.description}>{t('loadingScreen.description')}</div>
                </section>
            </div>
        </main>
    )
}