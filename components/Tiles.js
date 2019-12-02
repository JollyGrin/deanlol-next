import React, { Component, Fragment } from 'react'
import Tile from './Tile'

export default class Tiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.hobbyResults.map(item => (
                    <Tile key={item[0].id} value={item} />
                ))}
            </Fragment>
        )
    }
}
