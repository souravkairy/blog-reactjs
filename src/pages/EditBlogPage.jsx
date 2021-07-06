import React, { Component } from 'react'
import Header from '../components/Header'
import Editblog from '../components/Editblog'
import Footer from '../components/footer'

class EditBlogPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Editblog/>
                <Footer/>
            </div>
        )
    }
}

export default EditBlogPage
