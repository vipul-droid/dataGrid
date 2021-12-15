import React from 'react'

function FormButtom(props) {


    return (
        <div id="button" class="row">
           <button ><a href="/CompanyDataPage">{props.title}</a></button>
        </div>
    )
}

export default FormButtom
