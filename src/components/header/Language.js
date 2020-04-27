import React, { Component } from 'react';
import { verticalSlideDown, verticalSlideUp, stopTabScroll } from '../../config/scroll';
import './SeoFlag.css';

export default class Language extends Component {
    // componentDidMount() {
    //     const trapeze_wrapper = document.querySelector('.trapeze_wrapper');
    //     trapeze_wrapper.addEventListener('click', (e) => {
    //         console.log(e.target)
    //         if(e.target.className === 'trapeze_wrapper') {
    //             this.props.trapezeMobile(false)
    //         }
    //     });
    // }
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
            if(window.location.hostname === 'localhost') {
                hostName = 'http://seo.vbrqx.com'
            }
        const seo_flags = this.props.lang.length>0 && this.props.lang.map((item, i) => (
            <div className="seo_flag" key={i} data-toggle="tooltip" data-placement="top" title={item.hover}>
                <a href={this.props.type === 'garland' ? item.clink : `/${item.clink}`}>
                    <img src={`${hostName}/${item.flag}`} alt={item.name} />
                </a>
            </div>
        ));
        return (
            <div className="seo_desktop">
                <div className="seo_scroll_down_desk"
                        onMouseEnter={() => verticalSlideDown(this.seo_desktop_scroll)}
                        onMouseLeave={() => stopTabScroll(this.seo_desktop_scroll)}
                    >
                        <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_up_green_050.png" alt="arrow"/>
                </div>

                <div className="seo_desktop_scroll" ref={v => this.seo_desktop_scroll = v}>
                    {seo_flags}
                </div>

                <div className="seo_scroll_up_desk"
                    onMouseEnter={() => verticalSlideUp(this.seo_desktop_scroll)}
                    onMouseLeave={() => stopTabScroll(this.seo_desktop_scroll)}
                >
                    <img src="http://social.vbrqx.com/index1/img/symbols/brqx_2017_arrow_down_green_050.png" alt="arrow"/>
                </div>
            </div>
        )
    }
}
