import React from 'react'
import { DataGridPro,LicenseInfo  } from '@mui/x-data-grid-pro';

LicenseInfo.setLicenseKey(
    '91493119fc688a262fbcfd165025c7ebT1JERVI6MzQyNjIsRVhQSVJZPTE2NzEwMDQ5NzAwMDAsS0VZVkVSU0lPTj0x',
);

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'CompanyID',
      headerName: 'Company ID',
      width: 100,
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
      field: 'ValidTo',
      headerName: 'Valide Till',
      type: 'number',
      width: 120,
      editable: true,
    }
];

const rows = [
    { id: 1, CompanyName: 'Joe James', CompanyID: '456',AdminEmail:'TestCorp@gmail.com', AdminPhone: '4561239874', lastName: 'Snow', firstName: 'Jon', ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 2, CompanyName: 'Joe Walse', CompanyID: '756',AdminEmail:'Test@gmail.com', AdminPhone: '4561239874', lastName: 'Lannister', firstName: 'Cersei',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 3, CompanyName: 'Bobe Herm', CompanyID: '856',AdminEmail:'Tesla@gmail.com', AdminPhone: '4561239874',lastName: 'Lannister', firstName: 'Jaime',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000'},
    // { id: 4, CompanyName: 'James bond', CompanyID: '156',AdminEmail:'Corperation@gmail.com', AdminPhone: '4561239874',lastName: 'Stark', firstName: 'Arya', ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 5, CompanyName: 'Peter parker', CompanyID: '476',AdminEmail:'Marvel@gmail.com', AdminPhone: '4561239874',lastName: 'Targaryen', firstName: 'Daenerys',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 6, CompanyName: 'Belll', CompanyID: '457',AdminEmail:'TestCp@gmail.com', AdminPhone: '4561239874',lastName: 'Melisandre', firstName: "Nukk",  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 7, CompanyName: 'Leen James', CompanyID: '476',AdminEmail:'Mount@gmail.com', AdminPhone: '4561239874',lastName: 'Clifford', firstName: 'Ferrara', ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 8, CompanyName: 'Joe Happy', CompanyID: '478',AdminEmail:'hitzi@gmail.com', AdminPhone: '4561239874',lastName: 'Frances', firstName: 'Rossini',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000'},
    // { id: 9, CompanyName: 'Joe James', CompanyID: '654',AdminEmail:'Gmail@gmail.com', AdminPhone: '4561239874',lastName: 'Roxie', firstName: 'Harvey',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 10, CompanyName: 'Paaste James', CompanyID: '406',AdminEmail:'Levar@gmail.com', AdminPhone: '4561239874',lastName: 'Rolax', firstName: 'Harvey',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 11, CompanyName: 'Joe Peter', CompanyID: '453',AdminEmail:'TestCorp@gmail.com', AdminPhone: '4561239874',lastName: 'Elex', firstName: 'Nill',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 12,CompanyName: 'Peter James', CompanyID: '126',AdminEmail:'Peter@gmail.com', AdminPhone: '4561239874', lastName: 'Warner', firstName: 'Patar',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 13, CompanyName: 'Rhitz', CompanyID: '321',AdminEmail:'TestCNopadorp@gmail.com', AdminPhone: '4561239874',lastName: 'Sid', firstName: 'Parakr',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 14, CompanyName: 'Kopad', CompanyID: '741',AdminEmail:'Studio@gmail.com', AdminPhone: '4561239874',lastName: 'Dammy', firstName: 'Harry',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
    // { id: 15, CompanyName: 'James', CompanyID: '963',AdminEmail:'velda@gmail.com', AdminPhone: '4561239874',lastName: 'Toll', firstName: 'Laninster',  ProductID: 735,AllocatedUser: '4568',ActiveUser: '4235',ValidTo: '22/10/19',AddedUser:'5000' },
];


function CompanyLevel() {
    return (
        <div>
           <div style={{ height: 200, width: '100%' }}>
                <DataGridPro
                    rows={rows}
                    columns={columns}
                    loading={false}
                    rowHeight={38}
                    // onEditRowsModelChange={handleEditRowsModelChange}
                    // checkboxSelection
                    disableSelectionOnClick
                />
           </div>
           <div>

           </div>
        </div>
        
    )
}

export default CompanyLevel
