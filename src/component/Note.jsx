import { useState } from "react"
import From from "./From"

function Note(){
const[isOpen, setIaOpen] = useState(false)
const handleOpen = () => {
setIaOpen(true)
}
const handleClose = () => {
setIaOpen(false)
}
return <div >
<div className="bg-green-600 flex justify-between py-10 px-5">
<h1 className="text-6xl text-white ">Noty</h1>
<button onClick={handleOpen} className="bg-orange-300 w-[120px] h-11  ">Add note</button>
</div>
{
isOpen == true ? <From  close={handleClose}/> : ''
}
</div>
}
export default Note