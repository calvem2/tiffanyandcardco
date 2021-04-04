import Head from 'next/head'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

export default function Request(props) {
    return (
        <div>
          <NavBar/>
          <Form></Form>
        </div>
    )
}