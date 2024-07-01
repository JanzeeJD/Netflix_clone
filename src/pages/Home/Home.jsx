import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'

const Home = () => {

  return (
    <div className='home'>
      <Navbar />
      <div>
      <Banner />
      </div>
  
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home


