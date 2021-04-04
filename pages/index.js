import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home(props) {
    return (
        <div>
            <div className={styles.bgWrap}>
                <Image
                    src="/images/background.jpg" 
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.bgText}>
                <h1 id={styles.logo}>Tiffany & Card Co.</h1>
                <Link href={"./gallery"}>
                    <a className={styles.button} >take a look &#8594;</a>
                </Link>
            </div>
        </div>
    )
}