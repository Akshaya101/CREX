import React from 'react'
import { img1, img2 } from '../assets'
import styles from '../styles'

const Home = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.section}>
                <div className={`${styles.textSection} mt-7 lg:mt-16`}>
                    <h1 className={styles.headTitle}>CRYPTO EXCHANGE</h1>
                    <p className={styles.subTitle}>
                        Decentralized Exchange made easy for everybody. Built on Ethereum.
                        A Community Driven Platform. Welcome home to CREX.
                    </p>
                </div>
                <div className={styles.imageSection}>
                    <img src={img1} alt='wireframe' className={`${styles.images} w-4/5`} />
                </div>
            </div>
            <div className={styles.table}>
                
            </div>
            <div className={styles.section}>
                <div className='grid place-items-start lg:place-items-start'>
                    <img src={img2} alt='technologies-used' className={`${styles.images} w-4/5`} />
                </div>
                <div className={styles.textSection}>
                    <p className={`${styles.subTitle} mt-36`}>
                        Tokens available for exchange are, ETH, DAI and EXC.  Supports MetaMask wallet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home