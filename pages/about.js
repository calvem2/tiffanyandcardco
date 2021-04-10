import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import style from "../styles/About.module.css"

export default function About(props) {
    return (
      <div>
        <Head>
          <title>tiffanyandcardco | about</title>
          <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/love-letter_1f48c.png"/>
        </Head>
        <NavBar></NavBar>
        <div id={style.start}>
                <img
                    src="/images/about.jpg" 
                />
                <div id={style["start-info"]}>
                    <p>
                        hi, i'm tiffany
                    </p>
                    <a href="#about"><span></span></a>
                </div>
            </div>
        <div id="about" className={style.flex}>
          {/* <div id={style.image}>
              <img src="/images/profile.jpeg"/>
          </div> */}
          <div id={style.info}>
              <p>Thanks for stopping by my card portfolio!</p>
              <p>I was introduced to the world of card making when I started working at a stamp store in college, and I've been stampin' ever since!</p>
              <p>I love making cards for birthdays, holidays, and everything in between for my friends and family. Check out my gallery to see what I've made so far!</p>
          </div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    )
}