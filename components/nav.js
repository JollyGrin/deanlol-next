import React, { Component, Fragment } from 'react'
import Link from 'next/link'

export default class Nav extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                {/* <img src="../images/bulma.png" alt="Logo" /> */}
                            </a>
                            <span
                                className="navbar-burger burger"
                                data-target="navbarMenu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul>
                                        <li>
                                            <a href="https://medium.com/@dmasley">
                                                📝 My Writing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/dmasley">
                                                💬 My Thoughts
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
