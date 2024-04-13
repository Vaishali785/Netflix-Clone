import React from 'react';
import repairImg from '../assets/under-repair.jpg';
import './TechnicalIssue.css';

function TechnicalIssue() {
    return (
        <div className='repair-page'>
            <h2 className='repair-heading'>Repair In Progress</h2>
            <img src={repairImg} alt="Storyset image on Freepik" className='repair-img' />
            <p className='repair-text'>We are currently experiencing technical difficulties with Google services. We apologize for any inconvenience caused.</p>
        </div>
    )
}

export default TechnicalIssue