import { useState } from "react"
function From({close}){

return <div className="bg-black bg-opacity-[50%] absolute w-full h-screen  top-0">
 <div className=" flex justify-center mt-5">


<from className="bg-white W-[350PX] h-[480PX] mt-[10%]  p-20">
<i onClick={close} class="fa-solid fa-x text-3xl mt-[-50px]"></i>
<br/>
<input className=" border-2 border-black  w-[350px] h-[40px] my-5 " type="text"  placeholder="Enter title"/>
<br/>
<textarea className="border-2 border-black " rows={8} cols={46}/>
<br/>
<button className="bg-black text-white px-[150] my-5 w-full py-2 text-center  ml- text-3xl rounded">SAVE</button>
</from>


</div>
</div>
}
export default From