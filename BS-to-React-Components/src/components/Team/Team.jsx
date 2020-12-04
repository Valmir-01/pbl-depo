import React from 'react';


const Team = () => {
    return (
        <div id="team" className="team-grid">
            <div className="container">
                <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                    <div id="team_intro" className="intro">
                        <h2 className="text-center d-lg-flex justify-content-lg-center" data-aos="fade-down" data-aos-duration={800} data-aos-once="true" id="our_team">Our Team</h2>
                    </div>
                </div>
                <div className="row d-flex d-lg-flex justify-content-center justify-content-lg-center people" data-aos="fade-down" data-aos-duration={800} data-aos-delay={300} data-aos-once="true">
                    <div className="col-md-4 col-lg-3 item" id="team_column">
                        <div id="costea" className="box">
                            <div className="cover">
                                <h3 className="name">Costel Cazacu</h3>
                                <p className="title">Product Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 item" id="team_column">
                        <div id="sandu" className="box">
                            <div className="cover">
                                <h3 className="name">Sandu Furdui</h3>
                                <p className="title">Web Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 item" id="team_column">
                        <div id="antonela" className="box">
                            <div className="cover">
                                <h3 className="name">Antonela Malîi</h3>
                                <p className="title">Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex d-lg-flex justify-content-center justify-content-lg-center people" data-aos="fade-down" data-aos-duration={800} data-aos-delay={600} data-aos-once="true">
                    <div className="col-md-4 col-lg-3 item" id="team_column">
                        <div id="nichita" className="box">
                            <div className="cover">
                                <h3 className="name">Nichita Pasecinic</h3>
                                <p className="title">Back-end developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 item" id="team_column">
                        <div id="wasea" className="box">
                            <div className="cover">
                                <h3 className="name">Vasile Drumea</h3>
                                <p className="title">Mentor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 item" id="team_column">
                        <div id="pizdabol" className="box">
                            <div className="cover">
                                <h3 className="name">Alexandru Danilescu</h3>
                                <p className="title">Researcher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;