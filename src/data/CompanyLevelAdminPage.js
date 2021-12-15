import React from 'react'
import AdminLevel from './AdminLevel'
import CompanyLevel from './CompanyLevel'
import LineGraph from './LineGraph'
import './CompanyLevelAdminPage.css'
import DashboardIcon from '@mui/icons-material/Dashboard';


const bull = {
    maximum: 40,
    minimum: 35
}


function CompanyLevelAdminPage() {
    return (
        <div className='mainDiv'>

            <div className='sideBarLeft'>
                <div className='dashBoard'>
                    <DashboardIcon className='icon'/>
                    <h4>Dashboard</h4>
                </div>
            </div>

            <div className='restRightBar'>
                <div className='companyLevel' >
                   <CompanyLevel/>
                </div>
                <div className='adminLevel' >
                  <AdminLevel/>
                </div>
                <div className='graphCard'>
                    <div className='Linegraph' >
                         <LineGraph/>
                    </div>
                    <div className='card'>
                       
                           <h3 style={{textAlign: 'center'}}>User Info</h3>
                           <h4>Maximum :</h4>{bull.maximum}
                           <h4>Minimum :</h4>{bull.minimum}
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default CompanyLevelAdminPage
