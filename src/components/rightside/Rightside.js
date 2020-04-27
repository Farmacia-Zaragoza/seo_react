import React, { Component } from 'react'

export default class Rightside extends Component {
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
        // let baseUrl = hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://seo.vbrqx.com'
        }
        return (
            <div className="right_side">
                <div className="logo_item_wrapper">
                {
                    this.props.seo_logos.map((data, i) => (
                        <div className="logo_item" key={i}>
                            <a href="http://seo.vbrqx.com/en" key={i}>
                                <img src={`${hostName}/${data.img}`} alt="seo logo"/>
                            </a>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
