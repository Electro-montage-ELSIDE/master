import './About.css'
// import human from './images/human2.png'
import about_us from './images/about_us.jpg'

export default function About() {
    return(
        <div className='about_container'>
            <div className='main_about' >
                <div className='first_about' >
                    <h1>ჩვენი კომპანიის შესახებ</h1>
                    <div className='for_line'  ></div>
                    <p className='about_p' >შპს „ელსაიდი“ საქართველოში ერთ-ერთი ყველაზე წარმატებული
                        საინჟინრო კომპანიაა, რომლის ძირითად საქმიანობის სფეროს
                        წარმოადგენს საინჟინრო სისტემების პროექტირება და მონტაჟი.
                        კომპანიის ისტორია უკვე თითქმის ათწლეულს ითვლის.
                        კომპანიის პორტფოლიო არაერთ პრესტიჟულ და წარმატებულ
                        პროექტს მოიცავს.შპს “ელსაიდის“ წარმატების გასაღები
                        მაღალი კვალიფიკაციის მქონე, გამოცდილი და წარმატებული გუნდია.</p>
                </div>
                
                    <img    className='second_about' src={about_us} alt='about us' />
                    {/* <img  className='human' src={human}  alt='human icon' /> */}
                
            </div>
        </div>
    )
}