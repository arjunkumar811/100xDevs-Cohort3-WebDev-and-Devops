// bg, text, font, color 

function Color() {
 

  return (
    <>
      <div className='bg-green-500 flex justify-between' >
        <div id="child1" className='bg-slate-300'>
        child1
        </div>
        <div id="child2" className='bg-slate-100 font-black'>
        child2
        </div>
        <div id="child3" className='bg-red-600 text-red-500'>
        child3
        </div>
      </div>
    </>
  )
}

export Color;