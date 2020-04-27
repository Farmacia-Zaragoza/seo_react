import React, { Component } from 'react';
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'
import './Flip.css';
import ContentWithRewgex from './ContentWithRewgex';

export default class Flipbook extends Component {
    constructor(props) {
        super(props)
        this.totalPages = this.props.divideContent.length
        this.state = {
            selected: 0,
        }
        this.pages = [1,2,3,4,5]
        this.handleSelectedChange = this.handleSelectedChange.bind(this)
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }

    handleSelectedChange(selected) {
        this.setState({selected})
    }

    previous() {
        this.setState(state => ({
            selected: state.selected - 1
        }))
    }

    next() {
        this.setState(state => ({
            selected: state.selected + 1
        }))
    }
    render() {
        this.totalPages = this.props.divideContent.length > 0 && this.props.divideContent.length;
        console.log(this.props.data_content.length > 0 && this.props.data_content[0].pull02)
        const prev = this.props.data_content.length > 0 && this.props.data_content[0].pull02.prev_item.clink;
        const next = this.props.data_content.length > 0 && this.props.data_content[0].pull02.next_item.clink;
        return (
            <div className="App_flip">
                <FlippingPages
                    className="App-pages"
                    direction="horizontal"
                    selected={this.state.selected}
                    onSelectedChange={this.handleSelectedChange}
                    /* touch-action attribute is required by pointer events
                    polyfill */
                    touch-action="none"
                >
                    {
                        this.props.divideContent.map(( d, i )=> (
                            <div className="App-page" key={i}>
                                {
                                    d.map((data, i) => (
                                        i <= 6 && <ContentWithRewgex key={i} content={data} />
                                    ))
                                }
                                <div className="page_article_demo">
                                    <div className="row">
                                        <div className="col-6">
                                            <span className="Flip_article_demo"><a href={prev}>Article</a></span>
                                        </div>
                                        <div className="col-6">
                                            <span className="Flip_article_demo"><a href={next}>Demo</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="art_demo_btn_page_num">
                                    <div className="hr_line"></div>
                                    <div className="page_number">
                                        {i+1}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </FlippingPages>
                {/* Buttons are required for keyboard navigation */}
                <button
                    onClick={this.previous}
                    disabled={!this.state.selected}
                >Previous</button>
                <button
                    onClick={this.next}
                    disabled={this.state.selected + 1 === this.totalPages}
                >Next</button>
            </div>
        )
    }
}
