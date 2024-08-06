"use client"

import { useEffect } from 'react'
import style from './TechnologyComponent.module.css'
import mapImg from '../Resources/mapImg.png'
import waveimg from '../Resources/waveimg.png'
import techImg from '../Resources/techImg.png'
import webdevimg from "../Resources/webdevimg.png"
import proddesignimg from "../Resources/proddesignimg.png"
import technologyimg from "../Resources/technologyimg.png"
import environmentalimg from "../Resources/environmentalimg.png"

const TechnologyComponent = () => {
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
            <div id={style.EnergyCard} style={{ backgroundImage: `url(${techImg.src})` }}>
                <div className={style.cardOverlay}>
                    <h3>LAIMUNATI TECHNOLOGY</h3>
                    <p>Fostering Innovation: Laimunati Technology is Driving Progress with Cutting-edge Ventures in
                        Information And Communication Technology (ICT), including Software/Website Development, Product
                        Design, System Assembling, Internet Services Provision, and Communication Solutions.</p>
                </div>
            </div>
            <div id={style.OurServices}>
                <h3>OUR SERVICES</h3>
                <div id={style.ServiceCards}>
                    <div className={style.servicecard}>
                        <img src={webdevimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>WEB & MOBILE DEVELOPMENT</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={proddesignimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>PRODUCT DESIGN</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={technologyimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>TECHNOLOGY</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={environmentalimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>ICT CONSULTATION</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className={style.businesscards}>
                <section>
                    <div className={style.card} id={style.card1}>
                        <div className={style.businessCardOverlay} style={{ backgroundColor: "#C6DDFF" }}>
                            <div className={style.cardHeading}>
                                <h3 className={style.overlayHeading}>VISION</h3>
                            </div>
                            <ul>
                                <li>To be a leading conglomerate providing world className products and services.</li>
                            </ul>
                        </div>
                        <h3 className={style.cardtext}>VISION</h3>
                    </div>
                    <div className={style.card} id={style.card2}>
                        <div className={style.businessCardOverlay} style={{ backgroundColor: "#E4FFC2" }}>
                            <div className={style.cardHeading}>
                                <h3 className={style.overlayHeading}>MISSION</h3>
                            </div>
                            <ul>
                                <li>To achieve market leadership and operational excellence in every vertical we operate in.
                                </li>
                            </ul>
                        </div>
                        <h3 className={style.cardtext}>MISSION</h3>
                    </div>
                </section>
            </section>
            <div className="bgImg" id={style.wave} style={{ backgroundImage: `url(${waveimg.src})` }}></div>
            <div id={style.focus}>
                <h4>LAIMUNATI TECHNOLOGY IS FOCUSED ON DRIVING INVESTMENTS INTO PROJECTS ACROSS THE TECH INDUSTRY, WITH
                    STRATEGIC INVOLVEMENT IN:</h4>
                <div className={style.detailCards}>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic1}>ICT WEB & MOBILE SERVICES</h6>
                        <ul>
                            <li>Software Development</li>
                            <li>Software Feasibility Study</li>
                            <li>System Manufacturing</li>
                            <li>System Assembly</li>
                            <li>Web and Mobile Development</li>
                            <li>Internet Services Providers (ISP)</li>
                            <li>Other Computer Services Not Restricted To Wireless And Fixed Wire</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic2}>ELECTRIC VEHICLES & GADGETS</h6>
                        <ul>
                            <li>Electric Vehicles Purchase and Sales</li>
                            <li>Radar Systems</li>
                            <li>Navigation System</li>
                            <li>Communications System</li>
                            <li>Electric Power Generation.</li>
                            <li>Sales of Tech Gadgets and Equipment</li>
                            <li>ICT Setup for Companies and Businesses</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic3}>CONSULTANCY SERVICES</h6>
                        <ul>
                            <li>ICT Business Plans Coordination</li>
                            <li>Mobile and Web Services Consultations</li>
                            <li>Development Assessment and Strategy</li>
                            <li>Usability Testing</li>
                            <li>Product Design and Development Plans</li>
                            <li>Budgeting and Project Planning</li>
                            <li>Supply and Distribution of Gadgets and Equipment Evaluation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologyComponent;