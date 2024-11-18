import './App.css'
function App() {
  return (
    <>
      <WebPage/>
    </>
  )
}

function WebPage() {
  return (
    <>
    <div className="body bg-blue-900 flex justify-center items-center ">
      
      <div><h1>Webinar<span>.gg</span></h1>
      </div>

<div><h1>Verify Your Age</h1>
</div>

<div>
<h3>please confirm your birth year. This data will not be stored</h3>
</div>

<div>
<input type="button" value="Your Birth day year" />
</div>

<div>
<button className=''>Continue</button>
</div>

    </div>
    </>
  )
}



export default App
