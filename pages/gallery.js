import Head from 'next/head'
import Footer from '../components/Footer';
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar"
const GSheetReader = require('g-sheets-api');

export default function Home(props) {
    console.log(props);
    return (
        <div>
            <Head>
                <title>tiffanyandcardco | gallery</title>
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/love-letter_1f48c.png"/>
            </Head>
            <NavBar/>
            <Gallery
                initialCategory="all"
                imageData={props.res}
            />
            <Footer></Footer>
        </div>
        
    )
}

export async function getStaticProps() {
    const options = {
        sheetId: '1S_GLsf_4g2aDGEnJPsDvkvokQ0V8sIvLN5_py09fIxY',
        sheetNumber: 1,
        returnAllResults: false
    }

    let res;
    await GSheetReader(
        options,
        results => {
            res = results;
        },
        error => {
            console.log(error)
        });
    return {
        props: {
            res
        }
    }
}
