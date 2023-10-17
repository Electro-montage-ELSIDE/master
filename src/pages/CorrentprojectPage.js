import './CorrentprojectPage.css';
import ReactPlayer from 'react-player';
import video from '../videos/video2.mp4';

export default function OngoingPage() {
    return (
        <div className='corrent_test'>
            <div className='corrent_project_content'>
                <div>
                    <h1>Current project's content goes here</h1>
                </div>
                
                <div className="vertical_line"></div> {/* Add this for the vertical line */}

                <div className='corrent_video_1'>
                    <ReactPlayer
                        className="correntprojectfirst"
                        url={video}
                        playing={true}
                        controls={true} 
                        loop={true}
                        width='100%'
                        height='100%'
                        volume={0}
                    />
                </div>
            </div>
        </div>
    );
}
