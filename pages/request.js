import Head from 'next/head'
import Form from '../components/Form'
import NavBar from '../components/NavBar'
const GSheetReader = require('g-sheets-api');

export default function Request(props) {
    return (
        <div>
          <NavBar/>
          <Form 
            step={0}
            imageData={props.imageData}
          />
        </div>
    )
}

export async function getStaticProps() {
  let imageData = {};
  let types = ["cards", "stamps", "inventory"];
  for (let i = 0; i < types.length; i++) {
    const options = {
      sheetId: '1S_GLsf_4g2aDGEnJPsDvkvokQ0V8sIvLN5_py09fIxY',
      sheetNumber: i + 2,
      returnAllResults: false
    }

    await GSheetReader(
        options,
        results => {
            imageData[types[i]] = results;
        },
        error => {
            console.log(error)
        });
    }
    
    return {
        props: {
            imageData: imageData
        }
    }
}
