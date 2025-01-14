import { Link } from "react-router";
import useAxiosPublic from "../hook/useAxiosPublic";

const Register=()=>{
    const axiosPublic=useAxiosPublic()
    const handleRegisterSubmit=async(e)=>{
        e.preventDefault()
      const form=e.target;
      const name=form.username.value;
      const password=form.password.value;
      const email=form.email.value
      const data={
        name,
        password,
        email,
      }
      console.log(data)
      const userData=await axiosPublic.post('/users',data)
      .then(res =>{
        if(res.status === 200){
            axiosPublic.post('/loginUsers',{name:name , password:password  })
            .then(res =>{
                if(res.data=== "Login successfully"){
                    axiosPublic.post('/jwt',{password : password })
                    .then(res =>{
                        if(res.data.token){
                            localStorage.setItem('token' , res.data.token)
                            form.reset()
                          }
                    })
                    .catch(error =>{
                      console.log(error)
                    })
                }
              }).catch(error =>{
                console.log(error)
              })

            
        }else{
          console.log('Something is wrong.')
        }
      }).catch(error =>{
        console.log(error)
      })
    }
    return (
        <>
        <div className=' mt-10 lg:ml-96 md:ml-64 md:h-60    md:w-80 md:p-3 shadow-xl container'>
        <form onSubmit={handleRegisterSubmit} >
              <input type="email" name='email' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Email'></input>
              <br />
              <input type="text" name='username' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Name'></input>
              <br />
              <input type="password" name="password" required className='w-full border border-black p-1 mt-5' placeholder='Enter your password'  ></input>
              <br />
        <button className="  p-2  w-full mt-8 bg-blue-300"><input type="submit"  value="Register"/></button>
        </form>
        <p>Already have any account? please <Link to='/login' className='text-sky-700 hover:underline'>Login</Link> </p>
      </div>
        </>
    )
}
export default Register;