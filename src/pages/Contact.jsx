import Layout from "../layout/Layout"
import Titulo from "../components/Titulo"
import Form from "../components/Form"

function Contact() {

    return(
        <>
        <Layout>
            <Titulo leftLink={'/past'} rightLink={'/stats'}>
                Contact us
            </Titulo>
            <Form/>
        </Layout>
        </>
    )
}

export default Contact;