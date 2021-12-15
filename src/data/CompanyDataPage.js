import React,{useState, useEffect} from 'react'
import { DataGridPro,LicenseInfo  } from '@mui/x-data-grid-pro';
import DummyAutoSuggest from './DummyAutoSuggest'
import { Button } from '@material-ui/core';
import './CompanyDataPage.css'
import DashboardIcon from '@mui/icons-material/Dashboard';


LicenseInfo.setLicenseKey(
    '91493119fc688a262fbcfd165025c7ebT1JERVI6MzQyNjIsRVhQSVJZPTE2NzEwMDQ5NzAwMDAsS0VZVkVSU0lPTj0x',
);

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'CompanyName',
      headerName: 'Company Name',
      width: 130,
      editable: false,
    },
    {
      field: 'CompanyID',
      headerName: 'Company ID',
      width: 100,
      editable: false,
    },
    {
      field: 'AdminEmail',
      headerName: 'Admin Email',
      width: 200,
      editable: false,
    },
    {
      field: 'AdminPhone',
      headerName: 'Admin Phone',
      type: 'number',
      width: 120,
      editable: false,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 120,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 120,
      editable: false,
    },
    {
      field: 'ProductID',
      headerName: 'ProductID',
      type: 'number',
      width: 100,
      editable: false,
    },
    {
      field: 'AllocatedUser',
      headerName: 'Allocated User',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'ActiveUser',
      headerName: 'Active User',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'ValidTo',
      headerName: 'Valide Till',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'AddedUser',
      headerName: 'Users Added',
      type: 'number',
      width: 120,
      editable: false,
    },
  ];
  
  const rows = [
    { id: 1, CompanyName: 'Joe James', CompanyID: '456',AdminEmail:'TestCorp@gmail.com', AdminPhone: '4561239874', lastName: 'Snow', firstName: 'Jon', ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 2, CompanyName: 'Joe Walse', CompanyID: '756',AdminEmail:'Test@gmail.com', AdminPhone: '4561239874', lastName: 'Lannister', firstName: 'Cersei',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 3, CompanyName: 'Bobe Herm', CompanyID: '856',AdminEmail:'Tesla@gmail.com', AdminPhone: '4561239874',lastName: 'Lannister', firstName: 'Jaime',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000'},
    { id: 4, CompanyName: 'James bond', CompanyID: '156',AdminEmail:'Corperation@gmail.com', AdminPhone: '4561239874',lastName: 'Stark', firstName: 'Arya', ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 5, CompanyName: 'Peter parker', CompanyID: '476',AdminEmail:'Marvel@gmail.com', AdminPhone: '4561239874',lastName: 'Targaryen', firstName: 'Daenerys',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 6, CompanyName: 'Belll', CompanyID: '457',AdminEmail:'TestCp@gmail.com', AdminPhone: '4561239874',lastName: 'Melisandre', firstName: "Nukk",  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 7, CompanyName: 'Leen James', CompanyID: '476',AdminEmail:'Mount@gmail.com', AdminPhone: '4561239874',lastName: 'Clifford', firstName: 'Ferrara', ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 8, CompanyName: 'Joe Happy', CompanyID: '478',AdminEmail:'hitzi@gmail.com', AdminPhone: '4561239874',lastName: 'Frances', firstName: 'Rossini',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000'},
    { id: 9, CompanyName: 'Joe James', CompanyID: '654',AdminEmail:'Gmail@gmail.com', AdminPhone: '4561239874',lastName: 'Roxie', firstName: 'Harvey',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 10, CompanyName: 'Paaste James', CompanyID: '406',AdminEmail:'Levar@gmail.com', AdminPhone: '4561239874',lastName: 'Rolax', firstName: 'Harvey',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 11, CompanyName: 'Joe Peter', CompanyID: '453',AdminEmail:'TestCorp@gmail.com', AdminPhone: '4561239874',lastName: 'Elex', firstName: 'Nill',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 12,CompanyName: 'Peter James', CompanyID: '126',AdminEmail:'Peter@gmail.com', AdminPhone: '4561239874', lastName: 'Warner', firstName: 'Patar',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 13, CompanyName: 'Rhitz', CompanyID: '321',AdminEmail:'TestCNopadorp@gmail.com', AdminPhone: '4561239874',lastName: 'Sid', firstName: 'Parakr',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 14, CompanyName: 'Kopad', CompanyID: '741',AdminEmail:'Studio@gmail.com', AdminPhone: '4561239874',lastName: 'Dammy', firstName: 'Harry',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    { id: 15, CompanyName: 'James', CompanyID: '963',AdminEmail:'velda@gmail.com', AdminPhone: '4561239874',lastName: 'Toll', firstName: 'Laninster',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
  ];

  const handleEditRowsModelChange = (params) => {
    for(let k in params){
       let row = k; 
      for(let c in params[k]){   
        let col = c;
        console.log(params[k][col]);
        
      }
    }
    
  }

function CompanyDataPage(prop) {
    
   const [pass, setPass] = useState({});
   const [data, setData] = useState(rows);
   console.log(pass["name"]);

   useEffect(() => {
        let arr = [];

        if(pass["type"] ===1){
          arr = rows.filter((row) =>{ return row["CompanyName"] === pass["name"]})
          setData(arr);
        }else if(pass["type"] === 2){
          arr = rows.filter((row) =>{ return row["CompanyID"] === pass["name"]})
          setData(arr);
        }else if(pass["type"] === 3){
          arr = rows.filter((row) =>{ return row["AdminEmail"] === pass["name"]})
          setData(arr);
        }else if(pass["type"] === 4){
          arr = rows.filter((row) =>{ return row["AdminPhone"] === pass["name"]})
          setData(arr);
        }else if(pass["type"] === 5){
          arr = rows.filter((row) =>{ return row["lastName"] === pass["name"]})
          setData(arr);
        }else if(pass["type"] === 6){
          arr = rows.filter((row) =>{ return row["firstName"] === pass["name"]})
          setData(arr);
        }else{
          setData(rows)
        }
  
     }, [pass])
   
    return (
        <div>
            <div className='maiHeader'>
              <div className='sidebarCompanyDataPage'>
                  <div className='dashBoard'>
                      <DashboardIcon className='icon'/>
                      <h4>Dashboard</h4>
                  </div>
              </div>
               <div className='rightSideBar'>
                  <div className='rightSideBarHeader'>
                     <DummyAutoSuggest  pass={setPass}/>
                     <Button variant="contained" style={{background: 'blue', color:'white', margin: '10px'}}>Save</Button>
                     <Button variant="contained" style={{background: 'blue', color:'white', margin: '10px'}}>Add</Button>
                  </div>
                  <div className='dataGrid' >
                    <DataGridPro
                        rows={data}
                        columns={columns}
                        loading={false}
                        rowHeight={38}
                        onEditRowsModelChange={handleEditRowsModelChange}
                        // checkboxSelection
                        disableSelectionOnClick
                    />
                  </div>
               </div>
                
            </div>
            
        </div>
        
    )
}

export default CompanyDataPage
