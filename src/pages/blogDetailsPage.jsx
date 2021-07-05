import React, { Component } from 'react'
import Header from '../components/Header'

import Footer from '../components/footer'
import BlogDetails from '../components/BlogDetails'

class blogDetailsPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <BlogDetails/>
                <Footer/>
            </>
        )
    }
}
export default blogDetailsPage