import React, { Component } from 'react'
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import Footer from '../components/footer'

class MyProfilePage extends Component {
    render() {
        return (
            <>
                <Header/>
                <MyProfile/>
                <Footer/>
            </>
        )
    }
}
export default MyProfilePage