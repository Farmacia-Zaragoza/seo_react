import React, { Component } from 'react';
import { horizontalSlideRight, horizontalSlideleft, stopTabScroll } from '../../config/scroll';
import $ from 'jquery';
import 'turn.js';

export default class SecondMenu extends Component {
    state = {
        ele: null
    }
    UNSAFE_componentWillMount() {
        setTimeout(() => {
            const magazine = document.querySelector('.magazine');
        // console.log(magazine);
        this.setState({ele: magazine})
        }, 1000)
    }
    handleTurnLeft = (e) => {
        e.preventDefault();
        if (this.state.ele) {
            $(this.state.ele).turn("previous");
        }
    }
    handleTurnRight = (e) => {
        e.preventDefault();
        if (this.state.ele) {
            $(this.state.ele).turn("next");
        }
    }
    render() {
        // console.log(this.props.data_content.length > 0 && this.props.data_content[0].pull02.anchors_menu.pull03)
        return (
            <div>
                <div className="menu_wrapper">
                    <div className="menu_scroll_left second_menu"
                        onMouseEnter={() => horizontalSlideRight(this.menu_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.menu_inner_scroll)}
                        onClick={this.handleTurnRight}
                    >
                        <img src="http://seo.vbrqx.com/r_img/seoarrows/brqx_seoarrow_black_right_050_2018.png" alt="seo arrow"/>
                    
                    </div>
                    <div className={`menu_inner_scroll`} ref={node => this.menu_inner_scroll = node}>
                        {
                            this.props.data_content.length > 0 ? this.props.data_content[0].pull02.anchors_menu.pull03.map((ele, i) => (
                            <div className="item" key={i}><a href={ele.clink}>{ele.item}</a></div>
                            )): undefined
                        }
                    </div>
                    <div className="menu_scroll_right second_menu"
                        onMouseEnter={() => horizontalSlideleft(this.menu_inner_scroll)}
                        onMouseLeave={() => stopTabScroll(this.menu_inner_scroll)}
                        onClick={this.handleTurnLeft}
                    >
                        <img src="http://seo.vbrqx.com/r_img/seoarrows/brqx_seoarrow_black_left_050_2018.png" alt="seo arrow"/>
                    
                    </div>
                </div>
            </div>
        )
    }
}
