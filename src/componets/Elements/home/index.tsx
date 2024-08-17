import './home.css' 
import ft from '../../Imgs/bone.png'

import Header from '../header'
import Footer from '../Footer'

export const Home = () => {
    return(
        <>
            
            <Header/>
            
            <div className='ter'>
            <a href="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/a0/41/c0/a041c0eeebbccf8c9d6985b492d6273b/a041c0eeebbccf8c9d6985b492d6273b.11.jpg">
            <img className='picow' src={ft} alt="chapeu" />
            <h1>clique na img</h1>
            </a>
            </div>
            <button>Click</button>
            <Footer/>
        </>
    )
}