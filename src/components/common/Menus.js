import React, { Component } from 'react';
import { horizontalSlideleft, horizontalSlideRight, stopTabScroll } from '../../config/scroll';

export default class Menus extends Component {
    render() {
        return (
            <div>
                <div className="menu_wrapper">
                    <div className="menu_scroll_right"
                        onMouseEnter={() => horizontalSlideleft(this.menu_scroll_right)}
                        onMouseLeave={() => stopTabScroll(this.menu_scroll_right)}
                    >
                        <i className="fa fa-caret-left stfc_arrows"></i>
                    </div>
                    <div className={`panel_inner_scroll`} ref={node => this.panel_inner_scroll = node}>
                        {/* <Content content={this.props.content} index={this.props.index} /> */}
                    </div>
                    <div className="menu_scroll_right"
                        onMouseEnter={() => horizontalSlideRight(this.menu_scroll_right)}
                        onMouseLeave={() => stopTabScroll(this.menu_scroll_right)}
                    >
                        <i className="fa fa-caret-right stfc_arrows"></i>
                    </div>
                </div>
            </div>
        )
    }
}
