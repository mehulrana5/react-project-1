import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
    const all_upper = () => {
        setText(text.toUpperCase())
    }
    const all_lower = () => {
        setText(text.toLowerCase())
    }
    const first_letter_upper = () => {
        var a = text.split(' ')
        var txt = ''
        for (let i = 0; i < a.length; i++) {
            if (a[i] === '') {
                continue
            }
            else {
                var e = a[i].substring(1)
                e = e.toLowerCase();
                a[i] = a[i][0].toUpperCase() + e
                txt = txt.concat(a[i], " ")
            }
        }
        setText(txt)
        // document.querySelector('label').innerHTML="Text Converted !!"
    }
    const txt_len = () => {
        const txt = text.split(' ')
        var crt = 0
        for (let i = 0; i < txt.length; i++) {
            if (txt[i] === '') {
                continue
            }
            else {
                crt++
            }
        }
        setLen(crt)
    }
    const handelOnChange = (e) => {
        setText(e.target.value)
        txt_len()
    }
    // console.log(txt_len);
    const [text, setText] = useState('enter text here');
    const [len, setLen] = useState(3);
    const Mystyle={
        color:props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }
    return (
        <div className='container form'>
            <h2>
                <div className="mb-3 label-txt">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" 
                        style={{color:Mystyle.color}}>{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handelOnChange}
                        style={
                            { 
                                color:Mystyle.color,
                                backgroundColor:Mystyle.backgroundColor
                            }
                        }></textarea>
                </div>
                <button className={`btn btn-${props.btn_color} mx-1`} onClick={all_upper}>CONVERT</button>
                <button className={`btn btn-${props.btn_color} mx-1`} onClick={first_letter_upper}>Convert</button>
                <button className={`btn btn-${props.btn_color} mx-1`} onClick={all_lower}>convert</button>
                <section className='container info' style={
                    {
                        color:Mystyle.color 
                    }
                }>
                    <h3>
                        words:{len}
                    </h3>
                    <h3>
                        characters:{text.length}
                    </h3>
                </section>
            </h2>
        </div>
    )
}
Form.propTypes = {
    heading: PropTypes.string,
}
