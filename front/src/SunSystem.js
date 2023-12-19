import './SunSystem.css';
import React from 'react';

function SunSystem() {

    return (
        <div className='main-sun-div'>
            <div className='sun-container'>
                <div className='sun'></div>
                <div className='orbit earth'>
                    <div className='globe earth'>
                        <div className='orbit moon'>
                            <div className='globe moon'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SunSystem;
