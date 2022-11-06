import React from "react"
import Home from './pages/Home'
import Swap from "./pages/Swap"
import Navbar from "./Navbar"
import { Route, Routes } from 'react-router-dom'
import styles from './styles'

const year = new Date().getFullYear()

const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <header>
          <Navbar />
        </header>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/swap' element={<Swap />} />
          </Routes>
        </div>
        <div className={styles.footer}>
          <footer className="absolute">
            Copyright © {year}. CREX. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App;