import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";

import './Blog.css';
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
    return import("./NewPost/NewPost");
});


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true
        }
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact >Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/>

                    <Redirect from="/" to="/posts"></Redirect>
                    {/*<Route path="/" component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;