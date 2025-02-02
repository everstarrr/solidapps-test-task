import { FC } from 'react'
import styles from './ResourceItem.module.scss'
import coin from '../../../assets/resources/coin.png'
import green from '../../../assets/resources/green.png'
import blue from '../../../assets/resources/blue.png'
import red from '../../../assets/resources/red.png'

type Props = {
    color: 'coin' | 'green' | 'blue' | 'red'
    text: string
}

const model = {
    coin: {
        src: coin,
        bg: styles.coinBg,
        alt: 'Coin'
    },
    green: {
        src: green,
        bg: styles.greenBg,
        alt: 'Green resource'
    },
    blue: {
        src: blue,
        bg: styles.blueBg,
        alt: 'Blue resource'
    },
    red: {
        src: red,
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