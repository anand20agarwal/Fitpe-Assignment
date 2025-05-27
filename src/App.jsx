import './App.css'
import AppoinmentMain from './components/Appoinment/AppoinmentMain'
import Dashbord from './components/Dashbord/Dashbord'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
     <div className='frame'>
      <Sidebar/>
      <div>
      <Dashbord  />
     <AppoinmentMain/>
     </div>
     </div>
    </>
  )
}
export default App
