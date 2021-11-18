import React from 'react';
import '../App.css';
import Header from './Header'; 
import {Link} from 'react-router-dom';
import { FaChartArea } from 'react-icons/fa';
import { FaStream } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Header/>
            <ul>              
                <Link className="sidebar__item__link" to="/overview">
                <li key='1' className="sidebar__item">
                    
                    <p><FaChartArea/> Overview</p>  
                </li>
                </Link>
                
                <Link className="sidebar__item__link" to="/timeline">
                <li key='2' className="sidebar__item">
                    <p><FaStream/>  Timeline</p>
                </li>
                </Link>
                               
                <Link className="sidebar__item__link" to="/news">
                <li key='3' className="sidebar__item">
                    <p><FaNewspaper/>  News</p>
                </li>
                </Link>                    
            </ul>
        </div>
    )
}
