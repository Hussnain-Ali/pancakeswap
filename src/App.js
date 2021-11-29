import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header'

import './App.css'
import HomeSection1 from './component/HomeSection1'
import HomeSection2 from './component/HomeSection2'
import HomeSection3 from './component/HomeSection3'
import HomeSection4 from './component/HomeSection4'
import HomeSection5 from './component/HomeSection5'
import HomeSection6 from './component/HomeSection6'
import HomeSection7 from './component/HomeSection7'
import HomeSection8 from './component/HomeSection8'
import Footer from './component/Footer'
import BottomNavBar from './component/BottomNavbar'

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <Footer />
      <BottomNavBar />
    </div>
  )
}

export default App
