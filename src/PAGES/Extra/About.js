import React, { useEffect } from 'react'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
//import Footer2 from '../../COMPONENTS/Footer/Footer2'
import AppbarDesktop from '../../components/appbar/appbarDesktop'
import './Extrapages.css'

const About = () => {
<h1></h1>
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
      
        <Banner
        heading="About Us"
        bannerimage= '/images/banner/image7.png'
        />
        <div className='pgleft pgcommon'>
            <img src='/images/banner/image7.png' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='/images/banner/image8.png' alt='noimg' />

            <div>
                <h1>Who are we</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img src='/images/banner/image7.png' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
     
    
        </div>
  )
}

export default About