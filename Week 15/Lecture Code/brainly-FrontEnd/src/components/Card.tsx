
import { ShareIcon } from './../icons/ShareIcon';
import { NoteBookIcon } from './../icons/NoteBookIcon';
import { DeleteIcon } from './../icons/DeleteIcon';
 
interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtype"
}


export function Card({title, link, type}: CardProps) {
    return <div>
     <div className=" p-8 bg-white rounded-md outline-slate-200 max-w-72 border border-gray-200  min-h-48">
   
<div className="flex justify-between ">
    <div className="flex items-center text-md">

        <div className='text-gray-500 pr-2'><NoteBookIcon /></div>
        {title}
    </div>
    <div className="flex items-center">
       <div className='pr-2 text-gray-500'  >
        <a href={link} target='_blank'>
         <ShareIcon />
         </a>
         </div>

        <div className='text-gray-500'><DeleteIcon /></div>
    </div>
</div>

<div className="pt-4">
    {type === "youtype" && <iframe className='w-full' src= {link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }


{type === "twitter" && <blockquote className=" twitter-tweet">
  <a href={link.replace("x.com", "twitter.com")}></a> 
</blockquote>   }


</div>
</div>

    </div>
}