import { FC} from 'react';
import styles from './ProgressBar.module.scss'
import { motion } from 'motion/react'

type Props = {
    value: number
}

export const ProgressBar: FC<Props> = ({ value }) => {

    return (
        <div className={styles.container}>
            <motion.div className={styles.shadow}
                initial={{ width: "0%" }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.05, ease: "easeInOut" }}
            />
            <motion.div className={styles.progress}
                initial={{ width: "0%" }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.05, ease: "easeInOut" }}
            />
        </div>
    )
}