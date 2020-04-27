import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_wrapper">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="footer_text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-4 col-xl-6">
                                <div className="form-group search_box">
                                    <input type="text" className="form-control" />
                                    <span className="search_icon"><i className="fas fa-search"></i></span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-8 col-xl-6">
                                    <ul className="seo_ul">
                                        <li className="seo_li">
                                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_cookies_war_050_2017.png" alt="cookie" />
                                        </li>
                                    <li className="seo_li">
                                        <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_information_war_050_2017.png" alt="facebook" />
                                    </li>
                                    <li className="seo_li">
                                        <a href="https://www.facebook.com/transporteslucasrivera" target="_blank" rel="noopener noreferrer">
                                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_facebook_war_050_2017.png" alt="facebook" />
                                        </a>
                                    </li>
                                    <li className="seo_li">
                                        <a href="https://www.linkedin.com/in/jose-luis-lucas-rivera-45a62267" target="_blank" rel="noopener noreferrer">
                                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_linkedin_war_050_2017.png" alt="linkedin" />
                                            </a>
                                    </li>
                                    <li className="seo_li">
                                        <a href="https://twitter.com/EduBuscaNovia" target="_blank" rel="noopener noreferrer">
                                            <img src="http://social.vbrqx.com/index1/img/social_networks/brqx_twitter_war_050_2017.png" alt="twitter" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
