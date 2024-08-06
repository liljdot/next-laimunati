"use client"

import { useEffect } from 'react'
import style from './BuildComponent.module.css'
import mapImg from '../Resources/mapImg.png'
import buildImg from '../Resources/buildImg.png'
import waveimg from '../Resources/waveimg.png'
import constructionimg from "../Resources/constructionimg.png"
import realestateimg from "../Resources/realestateimg.png"
import managementimg from "../Resources/managementimg.png"
import valuationimg from "../Resources/valuationimg.png"
import townplanningimg from "../Resources/townplanningimg.png"


const BuildComponent = () => {

    useEffect(() => {
        let contactUsBtns = document.getElementsByClassName(style.servicecard)
        for (let i = 0; i < contactUsBtns.length; i++) {
            contactUsBtns[i].addEventListener('click', () => {
                window.open('./#contactus', '_self')
            })
            contactUsBtns[i].style.cursor = "pointer"
        }
    }, [])
    return (
        <>
            <figure className="bgImg" id="map" style={{ backgroundImage: `url(${mapImg.src})` }}></figure>
            <div id={style.EnergyCard} style={{ backgroundImage: `url(${buildImg.src})` }}>
                <div className={style.cardOverlay}>
                    <h3>LAIMUNATI BUILD</h3>
                    <p>We are your trusted partner in the realms of Building Construction, Real Estate Expertise, Property Valuation, Town Planning Services, Information Planning, Building Management, Recreational Facilities, Car Parks, Design Management, and Feasibility of Physical Development. Let us elevate your projects with our professional excellence and innovative solutions...</p>
                </div>
            </div>
            <div id={style.OurServices}>
                <h3>OUR SERVICES</h3>
                <div id={style.ServiceCards}>
                    <div className={style.servicecard}>
                        <img src={constructionimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>CONSTRUCTION</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={realestateimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>REAL ESTATE EXPERTISE</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={managementimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>FACILITY MANAGEMENT</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={valuationimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>PROPERTY VALUATION</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={townplanningimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>TOWN PLANNING SERVICES</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className={style.businesscards}>
                <section>
                    <div className={style.card} id="card1">
                        <div className="businessCardOverlay" style={{ backgroundColor: "#C6DDFF" }}>
                            <div className="cardHeading">
                                <h3 className="overlayHeading">VISION</h3>
                            </div>
                            <ul>
                                <li>To be a leading conglomerate providing world class products and services.</li>
                            </ul>
                        </div>
                        <h3 className="cardtext">VISION</h3>
                    </div>
                    <div className={style.card} id="card2">
                        <div className="businessCardOverlay" style={{ backgroundColor: "#E4FFC2" }}>
                            <div className="cardHeading">
                                <h3 className="overlayHeading">MISSION</h3>
                            </div>
                            <ul>
                                <li>To achieve market leadership and operational excellence in every vertical we operate in.
                                </li>
                            </ul>
                        </div>
                        <h3 className="cardtext">MISSION</h3>
                    </div>
                </section>
            </section>
            <div className={style.bgImg} id={style.wave} style={{ backgroundImage: `url(${waveimg.src})` }}></div>
            <div id={style.focus}>
                <h4>LAIMUNATI BUILD IS FOCUSED ON DRIVING INVESTMENTS INTO PROJECTS ACROSS THE CONSTRUCTION INDUSTRY, WITH STRATEGIC INVOLVEMENT IN:</h4>
                <div className={style.detailCards}>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic1}>BUILDING CONSTRUCTION</h6>
                        <ul>
                            <li>Real Estate Activities</li>
                            <li>Valuation Of Real Property</li>
                            <li>Town Planning Services</li>
                            <li>Information Planning Services</li>
                            <li>Building Management And Recreational Facilities</li>
                            <li>Car Parks</li>
                            <li>Design Management</li>
                            <li>Feasibility Of Physical Development.</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic2}>RADIATION ASSESSMENT</h6>
                        <ul>
                            <li>Data Analysis</li>
                            <li>Design</li>
                            <li>Procure</li>
                            <li>Supply</li>
                            <li>Install and Operate Equipment And Associated Devices; For Environmental Monitoring, Personnel Radiation Monitoring Included But Not Limited To Tld Badges</li>
                            <li>Survey Meters, Readers And Protection Equipment.</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic3}>CONSULTANCY SERVICES</h6>
                        <ul>
                            <li>Project Management</li>
                            <li>Informatics</li>
                            <li>Architecture</li>
                            <li>Surveying Project </li>
                            <li>Management</li>
                            <li>Data Processing,</li>
                            <li>Photogrammetrics</li>
                            <li>ManpowerDevelopment</li>

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BuildComponent;