import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import TheHead from '../components/TheHead'
import Tiles from '../components/Tiles'
import { getResults } from '../lib/db'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        }
    }

    chunk = (array, size) => {
        if (array.length <= size) {
            return [array]
        }
        return [array.slice(0, size), ...this.chunk(array.slice(size), size)]
    }

    componentDidMount() {
        getResults().then(data => {
            const chunkedArr = this.chunk(data, 3)
            this.setState({ results: chunkedArr })
        })
    }

    render() {
        return (
            <div>
                <TheHead />
                <section className="hero is-fullheight is-default is-bold hero-bkg-animated">
                    <div className="hero-head">
                        <Nav />
                    </div>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered">
                                <div className="column is-2">
                                    <h1 className="title is-2 abril">
                                        i'm dean.
                                    </h1>
                                    <h2 className="subtitle is-4">
                                        goofing is good
                                    </h2>
                                </div>
                                <div className="column is-9 is-offset-2">
                                    <Tiles hobbyResults={this.state.results} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .title {
                        font-size: 2.5rem;
                    }

                    .subtitle {
                        font-size: 2rem;
                    }
                `}</style>
            </div>
        )
    }
}
