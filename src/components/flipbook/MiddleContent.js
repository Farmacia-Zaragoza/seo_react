import React, { Component } from 'react';
import $ from 'jquery';

//components
import FirstMenu from './FirstMenu';
import SecondMenu from './SecondMenu';
import Turn from './Turn';
import ContentWithRewgex from './ContentWithRewgex';
// import Flipbook from './Flipbook';
import Page from './Page';

export default class MiddleContent extends Component {


    // splitIntoSubArray = (arr) => {
    //     console.log(arr)
    //     var newArray = [];
    //     while (arr.length > 0) {
    //       newArray.push(arr.splice(0, count)); 
    //     }
    //     return newArray;
    // }
    // setTurnElement = (ele) => {
    //     this.setState({ele: ele})
    // }
    
    render() {
        let hostName = window.location.protocol+'//'+window.location.hostname;
        if(window.location.hostname === 'localhost') {
            hostName = 'http://seo.vbrqx.com'
        }

        const articles = this.props.articles.length > 0 && this.props.articles;;
        const firstTwoLine = [];
        let anchorStrArr = [];
        const contentArr = [];
        let arrayOfData = [];

        // const getAnchorId = (content) => {
        //     if(content !== undefined) {
        //         // console.log(content.value);
        //         const expression = /\#([^(?!\"\>)]+)$/g;
        //         const result = expression.exec(content.value);
        //         if(result) {
        //             // console.log(result);
        //             // const removeHash = result[1].replace(']', '')
        //             const inputStr = result.input;
        //             // console.log(inputStr)
        //             // console.log(removeHash)
        //             for(let i=2; i<articles.length; i++) {
        //                 anchorStrArr.push(articles[i].value)
                        
        //             }
        //             // console.log(anchorStrArr)
        //             // anchorStrArr = anchorStrArr.map(article => {
        //             //     if(inputStr === article) {
        //             //         return 'onil'+article
        //             //     }else {
        //             //         return article;
        //             //     }
        //             // })
                    
        //         }
        //     }
        //     // Matching and replacing the Id with an empty string, extracting the id as well.
            
        //     // $:S[Positioning#positioning]
        
        //     // if (result) {
        //     //   console.log(result);
        //     // //   this.anchorId = result[1];
        //     // //   this.content = this.content.replace(`#${this.anchorId}`, "");
        //     // //   console.log(this.anchorId);
        //     // //   console.log(this.content)
        //     // }
        //   }

        if(articles.length > 0) {
            for(let i=0; i<articles.length; i++) {
                if(i <=1 ) {
                    firstTwoLine.push(articles[i].value)
                }
                if( i > 1) {
                    anchorStrArr.push(articles[i].value)

                }
                
            }
        }
        // console.log(anchorStrArr)
        // const expression = /\#([^(?!\"\>)]+)$/g;
        
        // const mapArr = anchorStrArr.map(ele => {
        //     const result = expression.exec(ele);
        //     if(result) console.log(result);
        //     if(result) {
        //         if(result.input === ele) {
        //             // console.log(ele+'onil')
        //             return 'onil'+ele;
        //         }
        //         else {
        //             return ele;
        //         }
        //     }
        // });

        // Object.keys(props.ingredients)
        //     .map(igKey => {
        //         return [...Array(props.ingredients[igKey])].map((_, i) => {
        //             return <BurgerIngredient key={igKey+i} type={igKey} />
        //         })
        //     })
        const expression = /\#([^(?!\"\>)]+)$/g;
        if(anchorStrArr) {
            anchorStrArr.forEach(ele => {
                const result = expression.exec(ele);
                // if(result) console.log(result);
                if(result) {
                    if(result.input === ele) {
                        // console.log(ele+'onil')
                        contentArr.push(ele);
                    }
                    else {
                        contentArr.push(ele);
                    }
                }
            })
        }

        // console.log(contentArr);
        // console.log(anchorStrArr)
        let joinAnchorToString = anchorStrArr.join(',');
        contentArr.forEach(ele => {
            // console.log(joinAnchorToString.replace(ele, ele+'onil'));
            joinAnchorToString = joinAnchorToString.replace(ele, 'onil'+ele)
        })
        // console.log(joinAnchorToString)
        const divideArraywithanchor = joinAnchorToString.split('onil');
        // console.log(divideArraywithanchor)
        divideArraywithanchor.forEach(data => {
            arrayOfData.push(data.split(','))
        })
        if(arrayOfData.length > 1) {
            // console.log(firstTwoLine)
            // arrayOfData = arrayOfData.pop();
            arrayOfData[1] = firstTwoLine.concat(arrayOfData[1]);
        }



        // console.log(this.props.data_content.length > 0 && this.props.data_content[0].pull02.parragraph.pull03)
        // const arrOfContent = this.props.data_content.length > 0 && this.props.data_content[0].pull02.parragraph.pull03;
    
        
        
        
        // const divideContent = this.splitIntoSubArray(this.props.articles);
        const prev = this.props.data_content.length > 0 && this.props.data_content[0].pull02.prev_item.clink;
        const next = this.props.data_content.length > 0 && this.props.data_content[0].pull02.next_item.clink;
        // console.log(divideContent)
        return (
            <div className="middle_content" style={{
                backgroundImage: `url(${hostName}/${this.props.backgrounds.length > 0 && this.props.backgrounds[0].img})`,
                backgroundSize: '100% 100%'
            }}>
                <FirstMenu 
                    backgrounds={this.props.backgrounds} 
                    data_content={this.props.data_content}
                />
                <div className="flip_book_area" style={{
                    backgroundImage: `url(${hostName}/${this.props.backgrounds.length > 0 && this.props.backgrounds[1].img})`,
                    backgroundRepeat: 'repeat'
                }}>
                    <SecondMenu 
                        data_content={this.props.data_content} 
                    />
                    <div className="magazine_wrapper">
                        {
                            arrayOfData.length > 1 && <Turn options={options} className="magazine">
                                {arrayOfData.length > 1 && arrayOfData.map((pageContentArr, index) => {
                                    return index > 0 && <Page key={index}
                                        index={index} 
                                        prev={prev} 
                                        next={next} 
                                        pageContentArr={pageContentArr}
                                    />
                                })}
                            </Turn>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const options = {
    width: '90%',
    height: '100%',
    autoCenter: true,
    display: window.innerWidth <=991 ? "single":"double",
    page: 1,
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    // display: 'single',
    when: {
      turned: function(e, page) {
        console.log("Current view: ", $(this).turn("view"));
      }
    }
  };
//   const pages = [
//     "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
//     "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
//     "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
//     "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
//     "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
//     "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
//   ];