import useMenu from "../../hook/useMenu";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router";
import useAxiosPublic from "../../hook/useAxiosPublic";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Menu =() =>{
    const [allMenus ,refetch]=useMenu()
    const axiosPublic=useAxiosPublic()
    
    const handleDelete=async(id)=>{
       const deleteMenu = await axiosPublic.delete(`/deleteMenu/${id}`)
       if(deleteMenu.data.deletedCount===1){
        refetch()
       }

    }
    return (
        <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Availability</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMenus?.map(allMenu  => (
            <StyledTableRow key={allMenu._id}>
              <StyledTableCell component="th" scope="row">
                {allMenu.menuName}
              </StyledTableCell>
              <StyledTableCell align="right">{allMenu.category}</StyledTableCell>
              <StyledTableCell align="right">{allMenu.price}</StyledTableCell>
              <StyledTableCell align="right">{allMenu.availability === 'available' ?<span className="text-green-600 font-bold text-xl">Yes</span> : <span className="text-red-600 font-bold text-xl">No</span>}</StyledTableCell>
              <StyledTableCell align="right"><Link to={`/updateMenu/${allMenu._id}`}><Button  ><EditIcon></EditIcon></Button></Link></StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=> handleDelete(allMenu._id)}><DeleteForeverIcon ></DeleteForeverIcon></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
          <h1 className="text-center font-bold text-xl text-sky-500 "><Link to='/addMenu' >Add Menu </Link></h1>
    </TableContainer>
        </div>
    )
}
export default Menu;