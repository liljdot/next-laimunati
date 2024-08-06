"use client"

import { useEffect } from 'react'
import style from './InvestmentsComponent.module.css'
import mapImg from '../Resources/mapImg.png'
import waveimg from '../Resources/waveimg.png'
import invImg from '../Resources/invImg.png'
import agricimg from "../Resources/agricimg.png"
import educationimg from "../Resources/educationimg.png"
import importexportimg from "../Resources/importexportimg.png"
import environmentalimg from "../Resources/environmentalimg.png"

const InvestmentsComponent = () => {
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
            <div id={style.EnergyCard} style={{ backgroundImage: `url(${invImg.src})` }}>
                <div className={style.cardOverlay}>
                    <h3>LAIMUNATI INVESTMENTS</h3>
                    <p>Nurturing Opportunities: Laimunati Investment is Empowering Growth through Astute Ventures in Human
                        Capital Development, Import, Export, Trading, Marketing, Sales, Distribution of General Goods...</p>
                </div>
            </div>
            <div id={style.OurServices}>
                <h3>OUR SERVICES</h3>
                <div id={style.ServiceCards}>
                    <div className={style.servicecard}>
                        <img src={agricimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>AGRICULTURE</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={educationimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>EDUCATION</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={importexportimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>IMPORT & EXPORT</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={environmentalimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>CONSULTATIONS</h4>
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
                <h4>LAIMUNATI INVESTMENTS IS FOCUSED ON DRIVING INVESTMENTS INTO PROJECTS ACROSS THE CONSTRUCTION INDUSTRY,
                    WITH STRATEGIC INVOLVEMENT IN:</h4>
                <div className={style.detailCards}>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic1}>AGRICULTURE</h6>
                        <ul>
                            <li>Modern Agricultural Farms / Projects</li>
                            <li>Exportation of Farm Produce</li>
                            <li>Importation of Agricultural Equipment</li>
                            <li>Processing of Agricultural Produce</li>
                            <li>Agro-Loan Schemes</li>
                            <li>Modernization Projects</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic2}>EDUCATION</h6>
                        <ul>
                            <li>Primary and Tertiary Education</li>
                            <li>Training and Development</li>
                            <li>Scholarships and Sponsorship Initiatives</li>
                            <li>ICT Development Programs</li>
                            <li>Rural Education Enhancement</li>
                            <li>Arts and Creative Initiatives</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic3}>CONSULTANCY SERVICES</h6>
                        <ul>
                            <li>ICT Consultations</li>
                            <li>Project Management</li>
                            <li>Project Development</li>
                            <li>Construction</li>
                            <li>Man Power Development</li>
                            <li>Man Power Development</li>
                            <li>Import & Export</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestmentsComponent;