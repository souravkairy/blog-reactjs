import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/hero'
import Blog from '../components/blog'
import Footer from '../components/footer'


class Index extends Component {
    render() {
        return (
            <>
               <Header/>
               <Hero/>
               <Blog/>
               <Footer/>

            </>
        )
    }
}
export default Index