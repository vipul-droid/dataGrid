import React from 'react'
import { DataGridPro,LicenseInfo  } from '@mui/x-data-grid-pro';

LicenseInfo.setLicenseKey(
    '91493119fc688a262fbcfd165025c7ebT1JERVI6MzQyNjIsRVhQSVJZPTE2NzEwMDQ5NzAwMDAsS0VZVkVSU0lPTj0x',
);

const cols = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'AdminID',
      headerName: 'Admin ID',
      width: 150,
      editable: false,
    },
    {
      field: 'AdminEmail',
      headerName: 'Admin Email',
      type: 'number',
      width: 200,
      editable: false,
    },
    {
      field: 'ActuveUser',
      headerName: 'Active User',
      type: 'number',
      width: 140,
      editable: true,
    },
    {
      field: 'LastLogin',
      headerName: 'Last Login',
      type: 'number',
      width: 140,
      editable: true,
    }
]

const admin = [
    {id: 1, AdminID: 'christophe-Nair', AdminEmail : "christophe37@harber.net", ActuveUser:'907', LastLogin: '10:31 PM'},
    {id: 2, AdminID: 'Forwest', AdminEmail : "christophe37@harber.net", ActuveUser:'203', LastLogin: '10:41 PM'},
    {id: 3, AdminID: 'Vedantu', AdminEmail : "christophe37@harber.net", ActuveUser:'703', LastLogin: '10:11 PM'},
    {id: 4, AdminID: 'Harber-Peter', AdminEmail : "christophe37@harber.net", ActuveUser:'789', LastLogin: '10:12 PM'},
    {id: 5, AdminID: 'Gargold Parkar', AdminEmail : "christophe37@harber.net", ActuveUser:'456', LastLogin: '10:15 PM'},
    {id: 6, AdminID: 'Lara trisin', AdminEmail : "christophe37@harber.net", ActuveUser:'415', LastLogin: '9:15 PM'},
    {id: 7, AdminID: 'Shire-Nair', AdminEmail : "christophe37@harber.net", ActuveUser:'425', LastLogin: '9:25 PM'},
    {id: 8, AdminID: 'Medhu', AdminEmail : "christophe37@harber.net", ActuveUser:'654', LastLogin: '9:47 PM'},
    {id: 9, AdminID: 'Andrew', AdminEmail : "christophe37@harber.net", ActuveUser:'514', LastLogin: '9:57 PM'},
    {id: 10, AdminID: 'Hackel', AdminEmail : "christophe37@harber.net", ActuveUser:'455', LastLogin: '9:17 PM'},
    {id: 11, AdminID: 'Parker', AdminEmail : "christophe37@harber.net", ActuveUser:'782', LastLogin: '10:17 PM'},
    {id: 12, AdminID: 'Bonyer', AdminEmail : "christophe37@harber.net", ActuveUser:'652', LastLogin: '10:27 PM'},
    {id: 13, AdminID: 'Docker', AdminEmail : "christophe37@harber.net", ActuveUser:'258', LastLogin: '10:07 PM'},
]

function AdminLevel() {
    return (
        <div style={{ height: 400, width: '100%' }}>
           <DataGridPro
                    rows={admin}
                    columns={cols}
                    loading={false}
                    rowHeight={38}
                    // onEditRowsModelChange={handleEditRowsModelChange}
                    // checkboxSelection
                    disableSelectionOnClick
            /> 
        </div>
    )
}

export default AdminLevel
