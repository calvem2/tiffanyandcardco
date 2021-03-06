import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter();
    return (
      <div className={styles["home-header"]}>
        <div id={styles.menu}>
          <Link href="/about">
            <a className={router.pathname === "/about" ? styles.selected : styles.unselected} >ABOUT</a>
          </Link>
          <Link href="/gallery">
            <a className={router.pathname === "/gallery" ? styles.selected : styles.unselected} >GALLERY</a>
          </Link>
          <Link href="/request">
            <a 
            className={router.pathname === "/request" ? styles.selected : styles.unselected} 
            onClick={() => {if (router.pathname === "/request") {router.reload()}}}>REQUEST</a>
          </Link>
        </div>
      </div>

    )

}