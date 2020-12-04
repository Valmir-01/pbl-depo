import React from 'react';
import A from './users.gif';
import B from './projects.gif';
import C from './baldeoj.gif'


const Statistics = () => {
    return (

<div className="d-xl-flex align-items-xl-center team-grid" id="scroll2">
    <div className="container">
        <div className="d-lg-flex justify-content-lg-center align-items-lg-center" id="stat_div">
            <div id="stat_div2" className="intro">
                <h2 className="text-center d-sm-flex d-lg-flex justify-content-sm-center align-items-sm-center justify-content-lg-center" data-aos="fade-down" data-aos-duration={800} data-aos-once="true">Statistics&nbsp;</h2>
            </div>
        </div>
        <div className="row d-flex d-lg-flex justify-content-center justify-content-lg-center people" data-aos="fade-down" data-aos-duration={800} data-aos-delay={300} data-aos-once="true" id="stat">
            <div className="col-md-4 col-lg-3 item item1" id="stat_column1" style={{backgroundImage:`url(${A})`}}>
                <div />
            </div>
            <div className="col-md-4 col-lg-3 item" id="stat_column2"   style={{backgroundImage:`url(${B})`}}>
                <div />
            </div>
            <div className="col-md-4 col-lg-3 item" id="stat_column3"   style={{backgroundImage:`url(${C})`}}>
                <div />
            </div>
        </div>
    </div>
</div>
);
}


export default Statistics;