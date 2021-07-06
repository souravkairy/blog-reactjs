import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import AllUSer from '../pages/AllUSer.jsx'
import blogDetailsPage from '../pages/blogDetailsPage.jsx'
import EditBlogPage from '../pages/EditBlogPage.jsx'
import Index from '../pages/Index.jsx'
import MyProfilePage from '../pages/MyProfilePage.jsx'
import SignInPage from '../pages/SignInPage.jsx'
import SignUp from '../pages/SignUpPage.jsx'

class appRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/signIn" component={SignInPage}/>
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/myProfile" component={MyProfilePage}/>
                    <Route exact path="/blogDetails" component={blogDetailsPage}/>
                    <Route exact path="/allUser" component={AllUSer}/>
                    <Route exact path="/editBlog/:id" component={EditBlogPage}/>
                </Switch>
            </>
        )
    }
}
export default appRouter