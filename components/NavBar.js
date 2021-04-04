import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();

    return (
      <div className={styles.header}>
        <div id={styles.logo}>Tiffany & Card Co.</div>
        <div id={styles.menu}>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
          <Link href="/gallery">
            <a>GALLERY</a>
          </Link>
          <Link href="/request">
            <a>REQUEST</a>
          </Link>
        </div>
      </div>

    )

}