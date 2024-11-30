// sm, md, lg, xl, 2xl
// visiable - hidden, 


export function SidebarClass1() {

    return <div className="flex justify-between">

        <div className=" transition-all w-0  md:w-96 h-screen delay-1000">
            Sidebar
        </div>
        <div className="bg-green-500 w-full h-screen">
            Content
        </div>
    </div>
}