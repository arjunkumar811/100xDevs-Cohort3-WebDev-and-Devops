import { Button } from './components/Button';
import { PlusIcon } from './icons/PlushIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {


  return (
    <div> 

    <Button variant='primary' text='Add Content' startIcon={<PlusIcon />}></Button> 
    <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button> 



    </div>
  )
}

export default App
