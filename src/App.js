import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import DummyAutoSuggest from './data/DummyAutoSuggest';
import CompanyDataPage from './data/CompanyDataPage';
import CompanyLevel from './data/CompanyLevel';
import AdminLevel from './data/AdminLevel';
import LineGraph from './data/LineGraph';
import CompanyLevelAdminPage from './data/CompanyLevelAdminPage';




function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Login />}/>
          <Route path="/CompanyDataPage" element={<CompanyDataPage/>} />
          <Route path="/CompanyLevelAdminPage" element={<CompanyLevelAdminPage/>} />
      </Routes>
    </BrowserRouter>
    // <DummyAutoSuggest/>
    // <CompanyDataPage/>
    // <CompanyLevel/>
    // <AdminLevel/>
    // <LineGraph/>
    // <CompanyLevelAdminPage/>
  );
}

export default App;
