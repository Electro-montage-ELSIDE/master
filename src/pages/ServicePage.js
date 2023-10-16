import './ServicePage.css'
import { Routes, Route } from 'react-router-dom';
import { Maintext } from '../Maintext';
import ElectricalIng from './Electrical_ing';
import FireFighting from './FireFighting'

export default function ServicePage(){
    return (
        <div>
            <div className='add_space'  >

            </div>
            <Routes>
                <Route index element={<Maintext />} />
                <Route path='engineering' element={<ElectricalIng />} />
                <Route path='firefighting' element={<FireFighting />} />
            </Routes>
        </div>
    )
}