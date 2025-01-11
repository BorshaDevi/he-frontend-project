
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

 
 const Login =()=>{
  const navigate=useNa
   const handleMouseDownPassword = (event) => {
     event.preventDefault();
   };
   const handleMouseUpPassword = (event) => {
     event.preventDefault();
   };
 




   const handleLoginSubmit=(e)=>{
      e.preventdefault()
   }
    return(
      <Card sx={{ maxWidth: 345 ,
      }} className=' mt-10 lg:ml-96 md:ml-64  ml-4'>
      <CardContent className=''>
        <form onSubmit={handleLoginSubmit} >
        <FormControl className="w-full"  variant="standard">
          <InputLabel  htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
            id="standard-adornment-password"
            type= "email"
          />
        </FormControl>
        <FormControl  className="w-full"  variant="standard">
          <InputLabel  htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type= "password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  k={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                 
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <button className="  p-2  w-full mt-8 bg-blue-300"><input type="submit"  value="Login"/></button>
        </form>


        <p>Do not have any account? please </p>
      </CardContent>
    </Card>
    )
 }
 export default Login;