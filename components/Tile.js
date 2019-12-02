import React, { Component, Fragment } from 'react'
import TileItem from './TileItem'

export default class Tile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {}
    render() {
        return (
            <Fragment>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        {this.props.value.map(item => (
                            <TileItem key={item.id} tile={item} />
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}
