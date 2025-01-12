import { Link } from "react-router";

const Register=()=>{
    const handleRegisterSubmit=e=>{
        e.preventDefault()
    }
    return (
        <>
        <div className=' mt-10 lg:ml-96 md:ml-64  w-80 ml-4 container'>
        <form onSubmit={handleRegisterSubmit} >
              <input type="text" name='username' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Name'></input>
              <br />
              <input type="password" name="password" required className='w-full border border-black p-1 mt-5' placeholder='Enter your password'  ></input>
              <br />
        <button className="  p-2  w-full mt-8 bg-blue-300"><input type="submit"  value="Login"/></button>
        </form>
        <p>Already have any account? please <Link to='/login' className='text-sky-700 hover:underline'>Login</Link> </p>
      </div>
        </>
    )
}
export default Register;