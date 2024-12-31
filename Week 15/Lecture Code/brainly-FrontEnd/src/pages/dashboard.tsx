import { Button } from '../components/Button';

import { PlusIcon } from '../icons/PlushIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { SideBar } from '../components/SideBar';
import { useContent } from '../hooks/useContent';
import { Card } from './../components/Card';

export function DashBoard() {
const [modelOpen, setModelOpen] = useState(false);
const contents = useContent();

  return (
<div>

   <SideBar />

    <div className='p-4 ml-72 min-h-screen  bg-gray-100 border-2'> 
<CreateContentModal open={modelOpen} onClose={() => {
  setModelOpen(false);
}}/>
<div className="flex justify-end gap-4">
    <Button onClick={() => {
      setModelOpen(true)
    }}  variant='primary' text='Add Content' startIcon={<PlusIcon />}></Button> 
    <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button> 
    </div>
    
    <div className="flex gap-6">
    
{contents.map(({type, link, title, _id }) => 
  <Card key={_id} type={type} link={link} title={title}  />
)}
  
    </div>

    </div>
    </div>
    
  )
}
