"use client"
import mapImg from './Resources/mapImg.png'
import buildImg from './Resources/buildImg.png'
import energyImg from './Resources/energyImg.png'
import invImg from './Resources/invImg.png'
import techImg from './Resources/techImg.png'
import LineAR from './Resources/Linearrow-right.png'
import waveimg from './Resources/waveimg.png'
import Group from './Resources/Group.png'
import confRoom from './Resources/empty-business-meeting-conference-room-with-graphs-diagrams-tv-background\ 1.png'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        //get scroll width by checking screen width
        const scrollWidth = screen.width < 500 ? 340 : screen.width < 1275 ? 700 : 1245

        //set listeners for mouseenter and mouseleave carousel
        let carouselFocus = false
        const carouselContainer = document.getElementsByClassName('slider')[0]
        // set boolean variable for mouseover on carousel
        carouselContainer.addEventListener('mouseenter', () => {
            carouselFocus = true
        })
        carouselContainer.addEventListener('mouseleave', () => {
            carouselFocus = false
        })

        //get slider nav buttons
        const buttons = document.getElementsByClassName('slideBtn')

        //set carousel auto sclide
        const carouselInterval = setInterval(() => {
            if (!carouselFocus) {
                document.getElementById('scroll').scrollBy({
                    top: 0,
                    left: scrollWidth,
                    behavior: 'smooth'
                })
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].style.backgroundColor = 'white'
                }

                if (document.getElementById('scroll').scrollLeft > scrollWidth * 2.5) {
                    document.getElementById('scroll').scrollLeft = 0
                }
                const currentBtn = Math.floor(document.getElementById('scroll').scrollLeft / scrollWidth)
                //alert(currentBtn)
                buttons[currentBtn >= 3 ? 0 : currentBtn + 1].style.backgroundColor = '#b5281d'
                buttons[currentBtn >= 3 ? 0 : currentBtn + 1].style.border = '1px solid white'
            }

        }, 5000)

        function changeSliderNav(event) {
            //set all slider nav buttons to white
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = 'white'
            }
            // set only target color to red
            event.target.style.backgroundColor = '#b5281d'
            event.target.style.border = '1px solid white'
        }
    
        //add event listeners to all slider nav buttons
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', changeSliderNav)
        }

        //handle form submit
        const handleInputChange = () => {
            if (document.getElementById('name').value && document.getElementById('subject').value && document.getElementById('message')) {
             document.getElementById('sendMessage').addEventListener('click', () => {
             window.open(`mailto: contact@laimunati.com?subject=${document.getElementById('subject').value}&body=${document.getElementById('message').value}\n sent by ${document.getElementById('name').value}&cc=${document.getElementById('email').value ? document.getElementById('email').value : null}`, '_self')
         })
            }
         }

         const formInputs = document.getElementsByTagName("input")
         for (let j = 0; j < formInputs.length; j++) {
            formInputs[j].addEventListener("change", handleInputChange)
         }
        // return clearInterval(carouselInterval)
    }, [])

    return (
        <>
            <figure class="bgImg" id="map" style={{ backgroundImage: `url(${mapImg.src})` }}></figure>
            <div class="welcomeMessage">
                <h2 class="welcome">WELCOME TO</h2>
                <h1>LAIMUNATI GROUP</h1>
            </div>
            <p class="slogan">Shaping the Future of Africa through Breakthroughs in Building, Energy, Investments, and
                Technology. Discover Laimunati Group Today</p>
            <section class="carouselContainer">
                <div class="sliderWrapper">
                    <div class="slider" id='scroll'>
                        <div id="slide1" style={{ backgroundImage: `url(${buildImg.src})` }}>
                            <div class="cardOverlay">
                                <h3>LAIMUNATI BUILD</h3>
                                <a href='./Build'><button>Explore<div
                                    style={{ backgroundImage: `url(${LineAR.src})` }}></div>
                                </button></a>
                                <p>We are your trusted partner in the realms of Building Construction, Real Estate
                                    Expertise, Property Valuation, Town Planning Services, Information Planning, Building
                                    Management, Recreational Facilities, Car Parks, Design Management, and Feasibility of
                                    Physical Development. Let us elevate your projects with our professional excellence and
                                    innovative solutions...</p>
                            </div>
                        </div>
                        <div id="slide2" style={{ backgroundImage: `url(${energyImg.src})` }}>
                            <div class="cardOverlay">
                                <h3>LAIMUNATI ENERGY</h3>
                                <a href='./Energy'><button>Explore<div
                                    style={{ backgroundImage: `url(${LineAR.src})` }}></div>
                                </button></a>
                                <p>Nurturing Opportunities: Laimunati Investment is Empowering Growth through Astute
                                    Ventures in Human Capital Development, Import, Export, Trading, Marketing, Sales,
                                    Distribution of General Goods...</p>
                            </div>
                        </div>
                        <div id="slide3" style={{ backgroundImage: `url(${invImg.src})` }}>
                            <div class="cardOverlay">
                                <h3>LAIMUNATI INVESTMENTS</h3>
                                <a href='./Investments'><button>Explore<div
                                    style={{ backgroundImage: `url(${LineAR.src})` }}></div>
                                </button></a>
                                <p>Energizing Tomorrow and Empowering Progress in Oil and Gas, Hydroelectric and Solar Power
                                    Supply, Environmental Management System Studies, Waste Management, Environmental Impact
                                    Assessment, Oil Spill Cleanup, and Ecological Waste Management Solutions</p>
                            </div>
                        </div>
                        <div id="slide4" style={{ backgroundImage: `url(${techImg.src})` }}>
                            <div class="cardOverlay">
                                <h3>LAIMUNATI TECHNOLOGY</h3>
                                <a href='./Technology'><button>Explore<div
                                    style={{ backgroundImage: `url(${LineAR.src})` }}></div>
                                </button></a>
                                <p>Fostering Innovation: Laimunati Technology is Driving Progress with Cutting-edge Ventures
                                    in Information And Communication Technology (ICT), including Software/Website
                                    Development, Product Design, System Assembling, Internet Services Provision, and
                                    Communication Solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="sliderNav">
                        <a href="#slide1" class='slideBtn'></a>
                        <a href="#slide2" class='slideBtn'></a>
                        <a href="#slide3" class='slideBtn'></a>
                        <a href="#slide4" class='slideBtn'></a>
                    </div>
                </div>
            </section>
            <div class="bgImg" id="wave" style={{ backgroundImage: `url(${waveimg.src})` }}></div>
            <section class="aboutUs">
                <h2>ABOUT US</h2>
                <div class="textbox">Laimunati Group is a dynamic conglomerate excelling in Building Construction, Real
                    Estate, Energy, Investment, and Technology sectors. Our diverse ventures encompass innovative solutions
                    in Information and Communication Technology (ICT), Oil and Gas, Renewable Energy, Environmental
                    Management, Import/Export, and more. With a commitment to excellence and sustainable growth, we inspire
                    progress and shape a brighter future for Africa. Join us on this exciting journey of empowerment and
                    visionary success.</div>
            </section>
            <h2 class="business">OUR BUSINESS MODEL</h2>
            <div class="bgImg" id='wave2' style={{ backgroundImage: `url(${waveimg.src})` }}></div>
            <section class="businesscards">
                <section>
                    <div class="card" id="card1">
                        <div class="businessCardOverlay" style={{ backgroundColor: "#C6DDFF" }}>
                            <div class="cardHeading">
                                <h3 class="overlayHeading">ORIGINATION</h3>
                            </div>
                            <ul>
                                <li>Project origination through wide industry network.</li>
                                <li>Strong relationships with major IPP’s and offtakers.</li>
                                <li>Participation in public and private tenders.</li>
                                <li>Co-development with other developers and local partners.</li>
                            </ul>
                        </div>
                        <h3 class="cardtext">ORIGINATION</h3>
                    </div>
                    <div class="card" id="card2">
                        <div class="businessCardOverlay" style={{ backgroundColor: "#E4FFC2" }}>
                            <div class="cardHeading">
                                <h3 class="overlayHeading">FEASIBILITY</h3>
                            </div>
                            <ul>
                                <li>In-house initial technical feasibility studies PVSyst, topography, electrical
                                    infrastructure, geotechnical and environmental impact assessment.</li>
                                <li>Selecting land areas and site visits.</li>
                                <li>Negotiating preliminary documents and obtaining permits/licenses.</li>
                                <li>Adherence to international standards in compliance ESG regulations and local laws.</li>
                            </ul>
                        </div>
                        <h3 class="cardtext">FEASIBILITY</h3>
                    </div>
                </section>
                <section>
                    <div class="card" id="card3">
                        <div class="businessCardOverlay" style={{ backgroundColor: "#E7E3FF" }}>
                            <div class="cardHeading">
                                <h3 class="overlayHeading">CONSTRUCTION</h3>
                            </div>
                            <ul>
                                <li>Finance equity of projects.</li>
                                <li>In-house EPC and Project Management capabilities.</li>
                                <li>In budget and on schedule construction and commissioning of solar plants.</li>
                            </ul>
                        </div>
                        <h3 class="cardtext">CONSTRUCTION</h3>
                    </div>
                    <div class="card" id="card4">
                        <div class="businessCardOverlay" style={{ backgroundColor: "#ffffff" }}>
                            <div class="cardHeading">
                                <h3 class="overlayHeading">OPERATION & MAINTENANCE</h3>
                            </div>
                            <ul>
                                <li>Asset management optimization.</li>
                                <li>Improvement in O&M costs and performance.</li>
                            </ul>
                        </div>
                        <h3 class="cardtext">OPERATION<br></br>&<br></br>MAINTENANCE</h3>
                    </div>
                </section>
                <section id="large">
                    <div class="businessCardOverlay" style={{ backgroundColor: "#F5DFFF" }}>
                        <div class="cardHeading">
                            <h3 class="overlayHeading">DEVELOPMENT</h3>
                        </div>
                        <ul>
                            <li>Full scope development activities – technical , financial, legal and tax advisory.</li>
                            <li>Drafting and negotiating PPA’s, shareholder agreements, land leases and concession
                                agreements.</li>
                            <li>Creation of a detailed financial model and perform sensitivity analyses to support
                                investment decisions.</li>
                            <li>Obtaining all necessary agreements, permits and licenses whilst liaising with local public
                                authorities to secure authorizations.</li>
                            <li>Development phase financing available.</li>
                        </ul>
                    </div>
                    <h3 class="cardtext">DEVELOPMENT</h3>
                </section>
            </section>
            <section class="whyChoose"
                style={{ backgroundImage: `url(${confRoom.src})` }}>
                <div class="bgImg" style={{ backgroundImage: `url(${Group.src})` }}></div>
                <div class="whyChooseOverlay">
                    <h2>WHY CHOOSE US?</h2>
                    <p><strong>Diverse Expertise:</strong> With proficiency in Building Construction, Real Estate, Energy,
                        Investment, and Technology, we offer comprehensive solutions for various industries, ensuring your
                        needs are met under one roof. <br></br><strong>Innovative Solutions:</strong> Our forward-thinking
                        approach drives us to pioneer cutting-edge innovations, empowering your projects with the latest
                        technologies and sustainable practices. <br></br><strong>Professional Excellence:</strong> We are
                        committed to delivering the highest standards of professionalism, ensuring that every aspect of our
                        services is carried out with precision and dedication. <br></br><strong>Visionary Growth:</strong> At
                        Laimunati Group, we inspire progress and growth, transforming opportunities into success stories and
                        envisioning a brighter future for our clients and partners. <br></br><strong>Experienced
                            Team:</strong> Our skilled professionals bring years of experience and expertise to the table,
                        ensuring that your projects are guided by the best minds in the industry.
                    </p>
                </div>
            </section>
            <section class="contactUs" id="contactus">
                <h2>CONTACT US TODAY!</h2>
                <p>{`Have a project in mind or want to explore how we can collaborate? We would love to hear from you. Reach
                    out to us today and let's embark on a journey of empowerment and visionary success together`}</p>
                <form>
                    <div class="formOverlay">
                        <input type="text" name="Name" id="name" required='required' onchange="handleInputChange()"></input><label for="name">Name</label>
                        <input type="text" name="Email" id="email" ></input><label for="email">Email
                            Address</label>
                        <input type="text" name="Subject" id="subject" required='required' onchange="handleInputChange()"></input><label
                            for="subject">Subject</label>
                        <textarea name="Message" id="message" cols="30" rows="10" required='required' onchange="handleInputChange()"></textarea><label
                            for="message">Message</label>
                        <button id='sendMessage'>Send Message</button>
                    </div>
                </form>
            </section>
        </>
    );
}
