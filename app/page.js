import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="font-bold lg:text-sm selection:bg-yellow-300 text-green-900 border-4 border-green-700 hover:text-red-500 hover:border-red-300">
        Hello world!
      </h1>

      <p className='text-xs text-red-600'>
        testing xs
      </p>

      <p className='text-base text-red-600'>
        testing base
      </p>
    </main>
  )
}
