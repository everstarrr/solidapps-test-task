import { FC } from 'react'
import styles from './ResourceItem.module.scss'

type Props = {
    color: 'coin' | 'green' | 'blue' | 'red'
    text: string
}

const model = {
    coin: {
        src: '/assets/resources/coin.png',
        bg: styles.coinBg,
        alt: 'Coin'
    },
    green: {
        src: '/assets/resources/green.png',
        bg: styles.greenBg,
        alt: 'Green resource'
    },
    blue: {
        src: '/assets/resources/blue.png',
        bg: styles.blueBg,
        alt: 'Blue resource'
    },
    red: {
        src: '/assets/resources/red.png',
        bg: styles.redBg,
        alt: 'Red resource'
    },
}


export const ResourceItem: FC<Props> = ({ color, text }) => {
    return (
        <div className={styles.container}>
            <div className={model[color].bg}>
                <img src={model[color].src} alt={model[color].alt}/>
            </div>
            <p>{text}</p>
        </div>
    )
}