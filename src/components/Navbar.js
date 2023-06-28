import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    const Mystyle={
        color:props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }
    return (
        <nav className={`navbar navbar-expand-sm bg-${props.mode}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className={`navbar-brand`} to="/" style={
                            {
                                color:props.mode==='dark'?'white':'black'
                            }}>{props.title}
                        </Link>
                        <Link className='nav-link' to='/' style={{color:Mystyle.color}}>Home</Link>
                    </ul>
                    <div className="form-check form-switch mx-3 my-3 navtoggle">
                        <input className="form-check-input mode" type="checkbox"  id="flexSwitchCheckChecked" onClick={props.togglemode}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}