import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//components
import Leftside from './components/leftside/Leftside';
import Rightside from './components/rightside/Rightside';
import Header from './components/header/Header';
import MiddleContent from './components/flipbook/MiddleContent';
import Footer from './components/footer/Footer';

export default class App extends Component {
  state = {
      site: {},
      backgrounds: [],
      seo_logos: [],
      data_content: [],
      articles: [],
      lang: [],
      seo_flags_left: []
  }
  componentDidMount() {
      window.addEventListener('resize', () => {
        window.location.reload();
      })
      const commn_data = document.getElementById('root').getAttribute('data-comm');
      const data_content = document.getElementById('root').getAttribute('data-content');

      // axios.get(data_content).then(res => console.log(res.data));
      axios.get(commn_data).then(res => this.setState({
        site: res.data.site,
        backgrounds: res.data.backgrounds,
        seo_logos: res.data.seo_logos_right
      }));

      axios.get(data_content).then(res => this.setState({
        data_content: res.data.articles,
        articles: [...res.data.articles[0].pull02.parragraph.pull03],
        lang: res.data.seo_flags_right,
        seo_flags_left: res.data.seo_flags_left
      }));
  }
  render() {
    console.log(this.state.lang)
    // let hostName = window.location.protocol+'//'+window.location.hostname;
    //     if(window.location.hostname === 'localhost') {
    //         hostName = 'http://seo.vbrqx.com'
    //     }
    return (
      <div className="wrapper">
          <Leftside seo_logos={this.state.seo_logos} />
          <div className="middle_region">
              <Header 
                  lang={this.state.lang} 
                  seo_flags_left={this.state.seo_flags_left}
              />
              <MiddleContent backgrounds={this.state.backgrounds} data_content={this.state.data_content} articles={this.state.articles} />
              <Footer />
          </div>
          <Rightside seo_logos={this.state.seo_logos} />
      </div>
    )
  }
}
