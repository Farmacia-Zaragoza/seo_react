import React, { Component } from 'react';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../../config/scroll';

export default class FirstMenu extends Component {
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://seo.vbrqx.com'
        }
        // console.log(this.props.data_content)
        return (
            <div>
                <div className="menu_wrapper">
                    <div className="menu_scroll_left"
                        onMouseEnter={() => horizontalSlideRight(this.menu_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.menu_inner_scroll)}
                    >
                        <a href={this.props.data_content.length > 0 ?
                                this.props.data_content[0].pull02.next_item.clink.toString() : undefined
                            }>
                            <img src="http://seo.vbrqx.com/r_img/seoarrows/brqx_seoarrow_orange_right_050_2018.png" alt="seo arrow"/>
                        </a>
                    </div>
                    <div className={`menu_inner_scroll`} ref={node => this.menu_inner_scroll = node} style={{
                        backgroundImage: `url(${hostName}/${this.props.backgrounds.length > 0 && this.props.backgrounds[3].img})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'contain'
                    }}>
                        <h2>
                            {this.props.data_content.length > 0 && 
                                this.props.data_content[0].hover
                            }
                        </h2>
                    </div>
                    <div className="menu_scroll_right"
                        onMouseEnter={() => horizontalSlideleft(this.menu_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.menu_inner_scroll)}
                    >
                        <a href={this.props.data_content.length > 0 ?
                                this.props.data_content[0].pull02.prev_item.clink.toString() : undefined
                            }>
                            <img src="http://seo.vbrqx.com/r_img/seoarrows/brqx_seoarrow_orange_left_050_2018.png" alt="seo arrow"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
