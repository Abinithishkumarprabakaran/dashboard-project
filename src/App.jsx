import './App.css'
import { Appbar } from './Appbar'
import { Earning } from './Earning'
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import { Charts } from './Charts';
import { Additionals } from './Additionals';

function App() {

  return (
    <div className="App">
      <Appbar />
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <Button size="small"variant="contained"> <DownloadIcon /> Generate Report</Button>
      </div>
      <Earning />  
      <Charts />
      <Additionals />
    </div>
  )
}

export default App
