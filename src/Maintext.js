import './Maintext.css'
import service from "./images/service_icon.png"
import electrical_image from './images/electrical_inginering.webp'
import fire from './images/fire.webp'
import low from './images/low_voltage.jpg'
import design from './images/making_desine.jpeg' 
import { Link} from 'react-router-dom'


export function Maintext(){
    return (
        <div className='big_main'>
            <div className='main_service_cont' >
                <div className='service_container'>
                    <h2 className='service_header' >S e r v i c e</h2>
                    <img src={service} alt='service icon' className='service_icon' />

                </div>
                
            </div>

            <div className='services_container'>
                {/* first servis pack */}
                <div className='services'>
                    <div>
                        <Link to={"/service/engineering"} >
                            <button className='service_button'>Electrical ingineering</button>
                        </Link>
                    </div>

                    <div>
                        <img src={electrical_image} alt="electrical inginering"  className='electrical'/> 
                    </div>
                </div>

                {/* second servis pack */}
                <div className='services'>
                    <div>
                        <Link to={'/service/firefighting'} >
                            <button className='service_button'>fire fighting</button>
                        </Link>
                    </div>

                    <div>
                        <img src={fire} alt="electrical inginering"  className='electrical'/> 
                    </div>
                </div>

                {/* third servis pack */}
                <div className='services'>
                    <div>
                        <button className='service_button'>exstra low voltage systems</button>
                    </div>

                    <div>
                        <img src={low} alt="electrical inginering"  className='electrical'/> 
                    </div>
                </div>

                {/* fourth servis pack */}
                <div className='services'>
                    <div>
                        <button className='service_button'>Design works</button>
                    </div>

                    <div>
                        <img src={design} alt="electrical inginering"  className='electrical'/> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}