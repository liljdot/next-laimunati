import style from './AboutUs.module.css'
import mapImg from '../Resources/mapImg.png'
import waveimg from '../Resources/waveimg.png'

const metadata = {
    title: "About Us"
}

const AboutUs = () => {
    return (
        <>
            <figure className={style.bgImg} id="map" style={{backgroundImage: `url(${mapImg.src})`}}></figure>



            <div className={style.bgImg} id={style.wave} style={{backgroundImage: waveimg.src}}></div>
            <section className="aboutUs">
                <h2>ABOUT US</h2>
                <div className="textbox">Laimunati Group is a dynamic conglomerate excelling in Building Construction, Real
                    Estate, Energy, Investment, and Technology sectors. Our diverse ventures encompass innovative solutions
                    in Information and Communication Technology (ICT), Oil and Gas, Renewable Energy, Environmental
                    Management, Import/Export, and more. With a commitment to excellence and sustainable growth, we inspire
                    progress and shape a brighter future for Africa. Join us on this exciting journey of empowerment and
                    visionary success.</div>
            </section>

            <div className={style.orgStructure}></div>

        </>
    )
}

export {metadata};
export default AboutUs;