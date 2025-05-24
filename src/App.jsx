import './App.css'
import Dashbord from './components/Dashbord/Dashbord'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
     <div className='frame'>
      <Sidebar/>
      <Dashbord/>
     </div>
    </>
  )
}

export default App
