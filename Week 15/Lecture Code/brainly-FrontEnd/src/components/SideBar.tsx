import { Sidebaritem } from "./Sidebaritem";
import { TwitterIcon } from './../icons/TwitterIcon';
import { YouTubeIcon } from './../icons/YouTubeIcon';
import { BrainIcon } from "../icons/BrainIcon";

export function SideBar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 text-black">
  
<div className="flex text-xl
pl-4 font-montserrat cursor-pointer">
  <div className="pr-1 flex items-center text-purple-600 cursor-pointer "><BrainIcon /></div>
    
    Brainly
    </div>

<div className="pt-4">
<Sidebaritem  text="Twitter" icon={<TwitterIcon />} />
<Sidebaritem text="YouTube" icon={<YouTubeIcon />} />
</div>

    </div>
}