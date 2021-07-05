import React, { Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import SignIn from '../components/SignIn'

class SignInPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <SignIn/>
                <Footer/>
            </>
        )
    }
}
export default SignInPage