import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import style from "../styles/About.module.css"

export default function About(props) {
    return (
      <div>
        <NavBar></NavBar>
        <div className={style.flex}>
          <div id={style.image}>
              <img src="/images/profile.jpeg"/>
          </div>
          <div id={style.info}>
              <h1 id={style.heading}>hi, i'm tiffany</h1>
              <p>Thanks for stopping by my card portfolio!</p>
              <p>I was introduced to the world of card making when I started working at a stamp store in college, and I've been stampin' ever since!</p>
              <p>I love making cards for birthdays, holidays, and everything in between for my friends and family. Check out my gallery to see what I've made so far!</p>
          </div>
        </div>
      </div>
    )
}