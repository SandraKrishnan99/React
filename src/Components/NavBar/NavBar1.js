import React, { Component } from 'react'
import {ItemLists} from "./Menubar.js" 
import { Button } from '../Button.js'
import './NavBar1.css'
class NavBar1 extends Component{
    state={
        active:false
    }
    handleClick = () =>{this.setState({active: !this.state.active})}
    
    render(){
    return (
            <nav className="NavbarThings">
                <h1 className="Main-heading">Bloggerz {<i className="fab fa-blogger"></i>} </h1> 
                <div className="menuicons" onClick={this.handleClick}>
                     <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>     
                </div>
                <ul className={this.state.active ? 'active-one' : 'regular-one'}>
                    {ItemLists.map((items,index) =>{
                        return(
                            <li key={index} className="navitemslist">
                                <a className={items.name} href={items.link}>{items.label}  {items.icon}</a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        
    )
}}

export default NavBar1
