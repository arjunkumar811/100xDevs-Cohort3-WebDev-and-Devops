import './App.css'
import { Button } from './components/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {


  return (
    <>
     <Button 
     startIcon={<PlusIcon size='lg' />} 
     size='lg' 
     title='Share'
     lastIcon={<ShareIcon size='lg' />}
     />
     
  
    </>
  )
}

export default App
