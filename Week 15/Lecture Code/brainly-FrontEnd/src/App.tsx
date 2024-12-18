import { Button } from './components/Button';
import { Card } from './components/Card';
import { PlusIcon } from './icons/PlushIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {


  return (
    <div> 

    <Button variant='primary' text='Add Content' startIcon={<PlusIcon />}></Button> 
    <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button> 
    <Card />


    </div>
  )
}

export default App
