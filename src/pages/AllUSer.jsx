import React, { Component } from 'react'
import Header from '../components/Header'
import AllUser from '../components/Alluser'
import Footer from '../components/footer'

class AllUSer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AllUser/>
                <Footer/>
            </div>
        )
    }
}

export default AllUSer
