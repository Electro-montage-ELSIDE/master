import './ProjectPage.css';
import { Routes, Route } from 'react-router-dom';
import { Projects } from '../Projects';
import OngoingPage from './CorrentprojectPage';
import ComplitedPage from './ComplitedPage';



export default function ProjectPage() {
    return (
        <div>
            <div className='project_padding'></div>
            <Routes>
                <Route index element={<Projects />} />
                <Route path="ongoing" element={<OngoingPage />} />
                <Route path='complited' element={<ComplitedPage />}/>
            </Routes>
        </div>
    );
}