import React from 'react';
import ContentWithRewgex from './ContentWithRewgex';

function Page(props) {
    const pageColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    console.log("pageColor: ", pageColor)
    return (
        <div className="page_wrapper">
            <div className="page" style={{
                background: pageColor
            }}>
                {
                    props.pageContentArr.map((data, i) => (
                        <ContentWithRewgex key={i} content={data} />
                    ))
                }
                
                <div className="art_demo_btn_page_num" style={{
                    background: pageColor
                }}>
                    <div className="page_article_demo">
                        <div className="row">
                            <div className="col-6">
                                <span className="Flip_article_demo"><a href={props.prev}>Article</a></span>
                            </div>
                            <div className="col-6">
                                <span className="Flip_article_demo"><a href={props.next}>Demo</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="hr_line"></div>
                    <div className="page_number">
                        {props.index-1}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
