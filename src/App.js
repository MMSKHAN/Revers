import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Treatments from './Components/Treatments/Treatments'

import Activities from './Components/Activities/Activities'
import CampaignTable from './Components/CampaignTable/CampaignTable'
// import Client from './Components/ClientTable/Client'
import Client from "./Components/ClientTable/Client"
import ConfigurationTable from './Components/ConfigurationTable/ConfigurationTable'
import PointTable from './Components/PointTable/PointTable'
import Referrals from './Components/Referrals/Referrals'
// import ContentTable from './Components/ContentTable/ContentTable'
import ContentTable from './Components/ContentTable/ContentTable'
import TopBar from './Components/Topbar/TopBar'
import Side from "./Components/Side bar/Side"
function App() {
  return (
   <>
 <BrowserRouter>
    <TopBar/>
    <Side/>
    <Routes>
    <Route path="/" element={<Client/>}/>
    <Route path="/Treatments" element={<Treatments/>}/>
    <Route path="/Activities" element={<Activities/>}/>
    <Route path="/CampaignTable" element={<CampaignTable/>}/>
    <Route path="/ConfigurationTable" element={<ConfigurationTable/>}/>
    <Route path="/PointTable" element={<PointTable/>}/>
    <Route path="/Referrals" element={<Referrals/>}/>
    <Route path="/ContentTable" element={<ContentTable/>}/>
     
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App