import React, { Component } from 'react';
import Language from './Language';
import './Header.css';

export default class Header extends Component {
    render() {
        // console.log(this.props.lang)
        return (
            <div className="header_area">
                <ul className="header_ul">
                    <li className="header_seo">
                        <img src="http://seo.vbrqx.com/r_img/seoflags/brqx_seo_flag_es_2020_160_100.png" alt="seo" />
                        <Language 
                            lang={this.props.seo_flags_left} 
                            type="garland"
                        />
                    </li>
                    <li className="header_logo">
                        <img src="http://seo.dbrqx.com/files/images/logos/perso/seo/brqx_logo_seo_2009.gif" alt="logo"/>
                    </li>
                    <li className="header_lang">
                        <img src="http://seo.vbrqx.com/r_img/seoflags/brqx_seo_flag_es_2020_160_100.png" alt="seo"/>
                        <Language 
                            lang={this.props.lang} 
                            type="lang"
                        />
                    </li>
                </ul>
            </div>
        )
    }
}
