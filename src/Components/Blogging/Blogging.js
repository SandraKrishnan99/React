import React from 'react';
import './Blogging.css';
import { pictures } from './Pictures';

export class Blogging extends React.Component{
    render(){
        return(
        <div className='maindiv'>
            <div>
            <h1 className="h1">Go Through the beutiful era of Art</h1>
            </div>
            <div className="img1">{pictures.map((pict,index) =>{
                return(
                    <img className={pict.cName} key={index} src={pict.url} alt={pict.alt}></img>
                )
    })}</div>
        </div>
            
        )}
        }

