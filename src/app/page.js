"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'


export default function Home() {
  return (
    <main className={styles.main}>

      
      <button onClick={()=>alert('welcome to pny')}>button</button>
    </main>
  )
}

