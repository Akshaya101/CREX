import React from 'react'
import { useEthers } from '@usedapp/core'
import styles from '../styles'
import { Exchange, Loader } from './components'
import { usePools } from '../hooks'

const Swap = () => {
    const { account } = useEthers()
    const [loading, pools] = usePools()

    return (
        <div className={styles.exchangeContainer}>
            {/* <h1 className={styles.headTitle}>CREX</h1>
            <p className={styles.subTitle}>Exchange with Ease</p> */}
            <div className={styles.exchangeBoxWrapper}>
                <div className={styles.exchangeBox}>
                    <div className='pink_gradient' />
                    <div className={styles.exchange}>
                        <p className='text-white'>
                            {account ? (
                                loading ? (
                                    <Loader title="Loading pools, please wait!" />
                                ) : <Exchange pools={pools} />
                            ) : <Loader title="Please connect your wallet!" />}
                        </p>
                    </div>
                    <div className='blue_gradient' />
                </div>
            </div>
        </div>
    )
}

export default Swap