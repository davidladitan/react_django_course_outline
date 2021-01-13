import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios'

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/',

})

// const [ins, setIns] = useState([])



const columns = [
  { id: 'name', label: 'Course code', minWidth: 170 },
  { id: 'code', label: 'Prepared by', minWidth: 100 },
  {
    id: 'population',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const columns_ = [
    { id: 'name', label: 'Outline Name', minWidth: 170 },
    { id: 'course_code', label: 'Course code', minWidth: 170 },
    { id: 'prepared_by', label: 'Prepared by', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  

];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

// const rows_ = [
//     {name:'outline 1', course_code:'123', prepared_by:'ab booming', date: '12-12-2021'},
//     {name:'outline 2',course_code:'123', prepared_by:'ab booming', date: '12-12-2021'},
//     {name:'outline 3',course_code:'123', prepared_by:'ab booming', date: '12-12-2021'},
// ]



// get request to receive all outlines
//function to receive data and set state of rows
//each row should have url of the saved outline page i.e route load a create ouline page with passing the urls used in useEffect as the props 

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function StickyHeadTable(props) {
  
  const rows_ = props.rows
  

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
        <button  >Create New Outline</button>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns_.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows_.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns_.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <a>{column.format && typeof value === 'number' ? column.format(value) : value}</a>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows_.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}



function AllOutlines() {
    const blankRows = {name:'', course_code:'', prepared_by:'', date: ''};
    const [rows_, setRows] = useState([blankRows]);

    const fillRows = (data)=>{
        const rows = data.map((item,idx) =>({
            'name':item.name, 'course_code': item.course_code, 'prepared_by': item.prepared_by, 'date': item.date_modified
        }));
        setRows([...rows]);
        console.log(data);
        console.log(rows);
    };

    useEffect(() => {
        api.get('/outlines').then(res =>{
            fillRows(res.data);
        });
            
       
    }, [])
  
    return (
        
        <div>
            <h1>All Course Outlines</h1>
            <StickyHeadTable rows = {rows_}></StickyHeadTable>
        </div>
      
    );
  }
  
  export default AllOutlines;