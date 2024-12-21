import { Button } from './components/Button';
import { Card } from './components/Card';
import { PlusIcon } from './icons/PlushIcon';
import { ShareIcon } from './icons/ShareIcon';
import { CreateContentModal } from './components/CreateContentModal';
import { useState } from 'react';

function App() {
const [modelOpen, setModelOpen] = useState(true);

  return (
    <div className='p-4'> 
<CreateContentModal open={modelOpen} onClose={() => {
  setModelOpen(false);
}}/>
<div className="flex justify-end gap-4">
    <Button variant='primary' text='Add Content' startIcon={<PlusIcon />}></Button> 
    <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button> 
    </div>
    
    <div className="flex gap-6">
    


    <Card type='youtype' link='https://www.youtube.com/watch?v=_zYqdyX1ZTo' title='Inspiring video'  />
    <Card type='twitter' link='https://x.com/Arjun2950618011/status/1850576837317198257' title='My Post'  />
    <Card type='twitter' link='https://x.com/cb_doge/status/1869524493888360703' title='Elon'  />
  
    </div>

    </div>
  )
}

export default App
