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
                    {/* background styles */}
                    
                        <div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                        </div>
                    
                                        
                    <div className='main_service_cont' >
                        <div className='service_container'>
                            <h2 className='service_header' >S e r v i c e</h2>
                            <img src={service} alt='service icon' className='service_icon' />
                        </div>
                        
                    </div>
                
                    <div className='service_buttons_all'>
                        {/* first servis pack */}
                        <div className='serviceItem'>
                            <div className="buttonContainer">
                                <Link to={"/service/engineering"}>
                                    <button className='service_button'>Electrical instalation works</button>
                                    <img src={electrical_image} alt="electrical engineering" className='hoverImage'/>
                                </Link>
                            </div>
                        </div>


                        {/* second servis pack */}
                        <div className='serviceItem'>
                            <div className="buttonContainer">
                                <Link to={"/service/engineering"}>
                                    <button className='service_button'>Fire fighting</button>
                                    <img src={fire} alt="electrical engineering" className='hoverImage'/>
                                </Link>
                            </div>
                        </div>

                        {/* third servis pack */}
                        <div className='serviceItem' >
                            <div className="buttonContainer">
                                <Link to={"/service/engineering"}>
                                    <button className='service_button'>Extra Low Voltage systems  </button>
                                    <img src={low} alt="electrical engineering" className='hoverImage'/>
                                </Link>
                            </div>
                        </div>

                        {/* fourth servis pack */}
                        <div className='serviceItem'>
                            <div className="buttonContainer">
                                <Link to={"/service/engineering"}>
                                    <button className='service_button'>Disign works</button>
                                    <img src={design} alt="electrical engineering" className='hoverImage'/>
                                </Link>
                            </div>
                        </div>
                </div>
            
        </div>
    )
}