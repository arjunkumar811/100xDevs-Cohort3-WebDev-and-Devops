function Grid() {
    return (
      <div>
          <h2 className=" font-bold">Grid Example using Tailwind</h2>
  
          <div className="grid grid-cols-12 sm:col-span-5 ">
              <div className="bg-blue-600 col-span-12 sm:col-span-5 ">Child 1</div>
              <div className="bg-red-600 col-span-12 sm:col-span-5 ">Child 2</div>
              <div className="bg-yellow-600 col-span-12 sm:col-span-5 ">Child 3</div>
          </div>
      </div>
    )
  }
  
  export Grid;