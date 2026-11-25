import {useState }from "react";
function Login(){
    const[email,setEmail]= useState("");
    const[password,setPassword]=useState("");
    const formsubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    }
    return(
        <>
        
        <div className="text-blue-500 text-center">ESTATE CRM </div>
        <h1 className="text-black-500 text-center"> WELCOME BACK! </h1>
        <form onSubmit={formsubmit}>
         <input type="email" id="Email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <br></br>
         <input type="password" id="password" required placeholder ="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <br></br>
         <button type="submit">Submit</button>   
        </form>

        </>

    );
}

export default Login;