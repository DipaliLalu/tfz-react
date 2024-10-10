import { useState } from "react";
function Dragimage(){
    const [image,setImage]=useState('');
    return (
        <div>
            <form>
                <label for="image" className="w-25 h-25">
                    <input type="file" id="image" placeholder="Select your image" accept="image/*" onChange={(e)=>setImage(e.files[0])} />
                    <div className="w-25 h-25">{image}</div>
                </label>
            </form>
        </div>
    )
}
export default Dragimage;

