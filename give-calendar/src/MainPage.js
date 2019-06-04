import React from 'react'
import Calendar from './Calendar';

export default class MainPage extends React.Component{
    render(){
        return(
            <div>
                <h1> Give Campaign Calendar</h1>
                <Calendar />                
            </div>    
        )
    }
}