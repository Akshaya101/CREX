import React from 'react'
import { Link } from 'react-router-dom'
import { swapLogo } from './assets'
import styles from './styles'
import { WalletButton } from './pages/components'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <img src={swapLogo} alt='swap logo' className='w-10 h-10 lg:w-24 lg:h-24 top-0 object-contain' />
            </Link>
            <ul className={styles.listItems}>
                <li><button className={styles.walletButton}><Link to='/swap'>LAUNCH APP</Link></button></li>
                <li><WalletButton /></li>
            </ul>
        </nav>
    )
}

export default Navbar