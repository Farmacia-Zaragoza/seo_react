import React, { Component } from 'react'

export default class TestArr extends Component {
    render() {
        const strpos = (haystack, needle, offset) =>
            {
                var i = (haystack+'').indexOf(needle, (offset || 0));
                return i === -1 ? false : i;
            }

        let contents = this.props.contents.length > 0 && this.props.contents //ff_arr.arr
        console.log(contents)
        let value    = ''

        let sw_cont  = false
        let cont     = 0

        // Array where you will manage paragraphs
        var mypf = Array()


        mypf[0] = new Array()

        if(contents) {
            for (var pos in contents)
        {
            value = contents[pos]
            console.log(value)

            mypf[cont].push(value)

            let is_anchor = strpos(value, '#')
            if (is_anchor !== false )
            {
                if (sw_cont)
                { 
                cont++
                mypf[cont] = new Array()
                }

                if (cont == 0) sw_cont = true
                
            } 
        }
        console.log(mypf)
        }
        return (
            <div>
                text
            </div>
        )
    }
}
