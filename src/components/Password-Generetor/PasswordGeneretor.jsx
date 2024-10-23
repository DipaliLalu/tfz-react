import React, { useState,useEffect } from "react";

function PasswordGeneretor() {
    const [length, setLength] = useState(8);
    const [charecterAllowed, setcharecterAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [password,setPassword]=useState("")

 useEffect(() => {
    function pwdGeneretor(){
        let pwd=''
        let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(charecterAllowed) str += "'~`!@#$%^&*(){}[]:;<>?/\|"
        if(numberAllowed) str += "1234567890";
    
        for(let i=0;i<length;i++){
            let char = Math.floor(Math.random() * str.length)+1
            pwd += str.charAt(char)
        }
         setPassword(pwd);
      }
      pwdGeneretor();

  }, [length,charecterAllowed,numberAllowed]);

  return (
    <div className="container text-bg-dark mt-5 p-5 w-50 rounded-5">
      <h2 className="text-center">Password Generetor</h2>
      <div className="d-flex gap-3 flex-column mt-4 align-items-center justify-content-center">
        <input type="text" className="form-control" value={password} />
        <div className="d-flex justify-content-center align-items-center gap-5">

          <div className="d-flex justify-content-center align-items-center gap-1">
            <input type="range" id="lengthFiled" className="m-0 mt-1" min={8} max={20} value={length} onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor="lengthFiled">Length {length}</label>
          </div>

          <div className="d-flex justify-content-center align-content-center gap-1">
            <input type="checkbox" id="charecterFiled" onChange={()=>setcharecterAllowed(!charecterAllowed)}/>
            <label htmlFor="charecterFiled">Charecter</label>
          </div>

          <div className="d-flex justify-content-center align-content-center gap-1">
            <input type="checkbox" id="numberFiled" onChange={()=>setNumberAllowed(!numberAllowed)} />
            <label htmlFor="numberFiled">Number</label>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PasswordGeneretor;
