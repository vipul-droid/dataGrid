import React ,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Autosuggest from 'react-autosuggest';
import IsolatedScroll from "react-isolated-scroll";
import DummyAutoSuggest from './DummyAutoSuggest';

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
    headerName: 'Valide To',
    type: 'number',
    width: 120,
    editable: false,
  },
  {
    field: 'AddedUser',
    headerName: 'Added User',
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

function DummyEditData() {
  const [rowData, setRowData] = useState(rows)

  const handleEditRowsModelChange = (params) => {
    for(let k in params){
       let row = k; 
      for(let c in params[k]){   
        let col = c;
        console.log(params[k][col]);
        // console.log(rows[row-1]);
        console.log(rows[row-1][col]);
        rows[row-1][col] = params[k][col];
        setRowData(rows)
      }
    }
    
  }

  // function getSuggestions(value) {
  
  //   let toSend = [
  //     {
  //       title: "Matching CompanyName",
  //       users: companyName
  //         .filter((section) => section["Company Name"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
  //         .map((section) => {
  //           return {
  //             id: section["companyID"],
  //             name: section["Company Name"],
  //             type: 1,
  //           };
  //         }),
  //     },
  //     {
  //       title: "Matching AdminID",
  //       users: adminEmail
  //       .filter((section) => section["adminID"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
  //       .map((section) => {
  //         return {
  //           id: section["adminID"],
  //           name: section["Admin email"],
  //           type: 1,
  //           };
  //         }),
  //     },
  //   ];
    
  //   toSend = toSend.filter((section) => section["users"].length > 0);
    
  //   return toSend;
  // }

  // const onChange = (event, { newValue }) => {
  //   setValue(newValue);
  // };

  // const onSuggestionsFetchRequested = ({ value }) => {
  //   setSuggestions(getSuggestions(value));
  // };

  // const onSuggestionsClearRequested = () => {
  //   setSuggestions([]);
  // };

  // const getSuggestionValue = suggestion => suggestion["name"];

  // const renderSuggestion = suggestion => (
  //   <div style={{ padding: "4px 16px" }}>
  //     <span>{suggestion["name"]}</span>
  //   </div>
  // );

  // function renderSuggestionsContainer({ containerProps, children }) {
  //   const { ref, ...restContainerProps } = containerProps;
  //   const callRef = (isolatedScroll) => {
  //     if (isolatedScroll !== null) {
  //       ref(isolatedScroll.component);
  //     }
  //   };
  
  //   return (
  //     <IsolatedScroll
  //       ref={callRef}
  //       {...restContainerProps}
  //       style={{
  //         zIndex: 1000,
  //         backgroundColor: "white",
  //         maxHeight: "calc(100vh - 200px)",
  //         overflow: "auto",
  //         width: "200px",
  //         border: Boolean(children) && "1px solid #DFD6D6",
  //         position: "absolute",
  //       }}
  //     >
  //       {children}
  //     </IsolatedScroll>
  //   );
  // }

  // function renderSectionTitle(section) {
  //   return (
  //     <div style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
  //       <strong>{section.title}</strong>
  //     </div>
  //   );
  // }

  // function getSectionSuggestions(section) {
  //   return section.users;
  // }

  // function selectedDataRender(index, val){
  //   let arr = [];

  //   if(index === 0){
  //     arr = updatedData.filter((data)=> {
  //       return data["Company Name"] === val;
  //     })
     
  //   }else{
  //     arr = updatedData.filter((data) => {
  //       return data["AdminID"] === val;
  //     })
      
  //   }
  //   setData(arr);
  // }

  // function onSuggestionSelected(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
  //   selectedDataRender(sectionIndex, suggestionValue)
  // }

  // const inputProps = {
  //   placeholder: 'Search Here',
  //   value,
  //   onChange,
  // };

  return (
    <div>
        <div className='autoSearch'>
           <DummyAutoSuggest/>
        </div>
        <div style={{marginTop: 10, height: 600, width: '100%' }}>
            <DataGrid
              rows={rowData}
              columns={columns}
              pageSize={11}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              onEditRowsModelChange={handleEditRowsModelChange}
            />
        </div>
    </div>
    
  );
}

export {DummyEditData, rows};