"use client"

import { useEffect } from 'react'
import style from './EnergyComponent.module.css'
import mapImg from '../Resources/mapImg.png'
import waveimg from '../Resources/waveimg.png'
import energyImg from '../Resources/energyImg.png'
import iconifyenergy from '../Resources/iconifyenergy.png'
import iconifyhome from '../Resources/iconifyhome.png'
import iconifyclient from '../Resources/iconifyclient.png'
import oilngasimg from "../Resources/oilngasimg.png"
import powersupplyimg from "../Resources/powersupplyimg.png"
import hydroelectricityimg from "../Resources/hydroelectricityimg.png"
import whypartnerimgdesktop from "../Resources/whypartnerimgdesktop.png"
import whypartnerimgmobile from "../Resources/whypartnerimgmobile.png"

const EnergyComponent = () => {
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
            <div id={style.EnergyCard} style={{ backgroundImage: `url(${energyImg.src})` }}>
                <div className={style.cardOverlay}>
                    <h3>LAIMUNATI ENERGY</h3>
                    <p>Energizing Tomorrow and Empowering Progress in Oil and Gas, Hydroelectric and Solar Power Supply,
                        Environmental Management System Studies, Waste Management, Environmental Impact Assessment, Oil
                        Spill Cleanup, and Ecological Waste Management Solutions</p>
                </div>
            </div>
            <div id={style.OurServices}>
                <h3>OUR SERVICES</h3>
                <div id={style.ServiceCards}>
                    <div className={style.servicecard}>
                        <img src={oilngasimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>OIL & GAS</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={energyImg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>SOLAR ENERGY</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={powersupplyimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>POWER SUPPLY</h4>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.servicecard}>
                        <img src={hydroelectricityimg.src} alt="" className="pic"></img>
                        <div className={style.serviceCardOverlay}></div>
                        <div className={style.label}>
                            <h4>HYDROELECTRICITY</h4>
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
            <div className="bgImg" id={style.wave} style={{ backgroundImage: waveimg.src }}></div>
            <div id={style.focus}>
                <h4>LAIMUNATI ENERGY IS FOCUSED ON DRIVING INVESTMENTS INTO PROJECTS ACROSS THE ENERGY INDUSTRY, WITH
                    STRATEGIC INVOLVEMENT IN:</h4>
                <div className={style.detailCards}>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic1}>OIL AND GAS</h6>
                        <ul>
                            <li>Trading & Commercial Management Operations</li>
                            <li>Logistics & Supply Chain</li>
                            <li>Environmental Impact Assessments & Other Studies</li>
                            <li>Waste Management & Security</li>
                            <li>Oil spill Clean-up & Ecological Management of Site habitat</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic2}>OIL AND GAS APPLICATION</h6>
                        <ul>
                            <li>Supply & Logistics of Natural Gas for process and other applications in the following
                                formats: CNG, LNG, SNG, & LPG </li>
                            <li>Power Generation from Natural Gas as fuel for Energy Solutions with CNG, LNG, SNG, LPG, PNG
                            </li>
                            <li>Financing and Turn-key Solutions in Gas-to-Power Applications</li>
                        </ul>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <h6 className={style.topic} id={style.topic3}>RENEWABLE ENERGY</h6>
                        <ul>
                            <li>Solar, Hydro & Wind Energy</li>
                            <li>Green Hydrogen, Biomass, Biogas & Ethanol Solutions</li>
                            <li>Battery Energy Storage Systems</li>
                            <li>Hybrid Renewable Solutions</li>
                            <li>On-grid & Off-grid generation</li>
                            <li>On-site & Off-site generation</li>
                            <li>Supply of Medium & Low Voltage Power Accessories</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div id={style.platform}>
                <h4>OUR RENEWABLE ENERGY PLATFORM ADDRESSES COST & SUSTAINABILITY CONCERNS</h4>
                <div className={style.detailCards}>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <article id={style.text1}>
                            <div className={style.icon} style={{ backgroundImage: `url(${iconifyenergy.src})` }}></div>
                            <h5>Laimunati Energy</h5>
                            <p>We are a leading indigenous provider of renewable energy for commercial & industrial firms in
                                Nigeria. We will help you to unlock significant value</p>
                        </article>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <article id={style.text2}>
                            <div className={style.icon} style={{ backgroundImage: `url(${iconifyhome.src})` }}></div>
                            <h5>We are an infrastructure investment firm that finances, owns & operates energy solutions …
                            </h5>
                            <p>

                                We build, finance, own and operate renewable energy solutions for our clients; providing
                                them with cleaner, cheaper & more reliable energy for their operations</p>
                        </article>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.cardgradient}></div>
                        <article id={style.text3}>
                            <div className={style.icon} style={{ backgroundImage: `url(${iconifyclient.src})` }}></div>
                            <h5>… to help our clients build their businesses.</h5>
                            <p>Our solutions typically save clients up to 30% in electricity costs and require upfront Zero
                                CAPEX required from our clients</p>
                        </article>
                    </div>
                </div>
            </div>

            <div id={style.whypatner}>
                <h3>WHY PARTNER WITH US?</h3>
                <img id={style.imgdesktop} src={whypartnerimgdesktop.src} alt=""></img>
                <img id={style.imgmobile} src={whypartnerimgmobile.src} alt=""></img>
            </div>
            <div id={style.process}>
                <h4>OUR PROCESS DELIVERS SERVICE THROUGH LONG TERM POWER PURCHASE AGREEMENT (PPA) THAT REQUIRE ZERO UPFRONT
                    COST FROM YOU</h4>
                <div className={style.detailCards}>
                    <div className={style.detailcard}>
                        <div className={style.number}>1</div>
                        <p>We collect your site info …You receive a solar quote and proposal</p>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.number}>2</div>
                        <p>We issue a monthly bill …You pay only for solar power produced and get cleaner, cheaper energy
                        </p>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.number}>3</div>
                        <p>We maintain the system over the contract term …You take no technical risk</p>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.number}>4</div>
                        <p>We prepare a longterm PPA contract …You review and approve</p>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.number}>5</div>
                        <p>We install the solar system at your facility …You pay nothing upfront</p>
                    </div>
                    <div className={style.detailcard}>
                        <div className={style.number}>6</div>
                        <p>We remove the system at the end of the contract or you purchase it, or you extend at a lower rate
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnergyComponent;