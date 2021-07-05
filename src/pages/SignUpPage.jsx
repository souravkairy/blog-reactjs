import React, { Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import SignUp from '../components/SignUp'

class SignUpPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <SignUp/>
                <Footer/>
            </>
        )
    }
}
export default SignUpPage