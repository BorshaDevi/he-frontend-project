import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
 
 const Login =()=>{
    return(
      <Card sx={{ maxWidth: 345 ,
      }} className=' mt-10 lg:ml-96 md:ml-64  ml-4'>
      <CardContent className=''>
        <form onSubmit={handleLoginSubmit} >
          
        </form>
      </CardContent>
    </Card>
    )
 }
 export default Login;