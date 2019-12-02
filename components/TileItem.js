import React, { Component, Fragment } from 'react'

export default class TileItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { fields } = this.props.tile

        const urlCheck = () => {
            if (fields.attach) {
                // this.setState({ url: fields.attach[0].url })
                return fields.attach[0].url
            }
        }

        urlCheck()

        return (
            <Fragment>
                <div
                    className="tile is-child box"
                    style={{
                        backgroundImage: `url(${urlCheck()})`,
                    }}
                >
                    <p className="title">
                        <a href={fields.url}>{fields.title}</a>
                    </p>
                    <p>{fields.subtext}</p>
                </div>
                <style jsx>{`
                    .box {
                        margin: 1rem !important;
                    }
                `}</style>
            </Fragment>
        )
    }
}
