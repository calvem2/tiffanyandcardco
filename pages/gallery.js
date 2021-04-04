import Head from 'next/head'
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar"
const GSheetReader = require('g-sheets-api');

export default function Home(props) {
    console.log(props);
    return (
        <div>
            <NavBar/>
            <Gallery
                initialCategory="all"
                imageData={props.res}
            />
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
