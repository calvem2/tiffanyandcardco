import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>tiffanyandcardco</title>
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/love-letter_1f48c.png"/>
            </Head>
            <div className={styles.bgWrap}>
                <img
                    src="/images/background.jpg" 
                    // layout="fill"
                    // objectFit="cover"
                    // quality={100}
                />
            </div>
            <NavBar></NavBar>
            <div className={styles.bgText}>
                <h1 id={styles.logo}>Tiffany & Card Co.</h1>
                <Link href={"./gallery"}>
                    <a className={styles.button} >take a look &#8594;</a>
                </Link>
            </div>
        </div>
    )
}