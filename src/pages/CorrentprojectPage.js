import './CorrentprojectPage.css'
import ReactPlayer from 'react-player';
import video from '../videos/video2.mp4'

export default function OngoingPage() {
    return(
        <div className='corrent_test' >
            <div className='corrent_project_content'  >
                <div>
                    <h1> corrent project's content goes here</h1>
                </div>
                <div className='corrent_video_1' >
                    <ReactPlayer
                        className="correntprojectfirst"
                        url={video}
                        playing={true}
                        controls={false}
                        loop={true}
                        width='100%'
                        height='100%'
                        volume={false}
                    
                    />
                   
                </div>
            </div>
        </div>
    )
}

