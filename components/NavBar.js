import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter();

    return (
      <div className={styles.header}>
        <Link href="/">
          <a id={styles.logo}>Tiffany & Card Co.</a>
        </Link>
        <div id={styles.menu}>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
          <Link href="/gallery">
            <a>GALLERY</a>
          </Link>
          <Link href="/request">
            <a onClick={() => {if (router.pathname === "/request") {router.reload()}}}>REQUEST</a>
          </Link>
        </div>
      </div>

    )

}