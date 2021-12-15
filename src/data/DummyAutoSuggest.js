import React,{createContext, useState} from 'react'
import Autosuggest from 'react-autosuggest';
import IsolatedScroll from "react-isolated-scroll";
import { rows } from './DummyEditData';


function DummyAutoSuggest(props) {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    

    function getSuggestions(value) {
  
        let toSend = [
          {
            title: "CompanyName",
            users: rows
              .filter((section) => section["CompanyName"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
              .map((section) => {
                return {
                  id: section["CompanyID"],
                  name: section["CompanyName"],
                  type: 1,
                };
              }),
          },
          {
            title: "CompanyID",
            users: rows
            .filter((section) => section["CompanyID"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
            .map((section) => {
              return {
                id: section["CompanyID"],
                name: section["CompanyID"],
                type: 2,
                };
              }),
          },
          {
            title: "AdminEmail",
            users: rows
            .filter((section) => section["AdminEmail"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
            .map((section) => {
              return {
                id: section["CompanyID"],
                name: section["AdminEmail"],
                type: 3,
                };
              }),
          },
          {
            title: "AdminPhone",
            users: rows
            .filter((section) => section["AdminPhone"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
            .map((section) => {
              return {
                id: section["CompanyID"],
                name: section["AdminPhone"],
                type: 4,
                };
              }),
          },
          {
            title: "lastName",
            users: rows
            .filter((section) => section["lastName"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
            .map((section) => {
              return {
                id: section["CompanyID"],
                name: section["lastName"],
                type: 5,
                };
              }),
          },
          {
            title: "firstName",
            users: rows
            .filter((section) => section["firstName"].toLowerCase().indexOf(value.toLowerCase()) !== -1)
            .map((section) => {
              return {
                id: section["CompanyID"],
                name: section["firstName"],
                type: 6,
                };
              }),
          },
        ];
        
        toSend = toSend.filter((section) => section["users"].length > 0);
        
        return toSend;
    }

    const getSuggestionValue = (suggestion)  => suggestion.name;

    const renderSuggestion = (suggestion) => (
        <div>
          {suggestion.name}
        </div>
    );

    const onChange = (event, { newValue }) => {
        setValue(newValue)
        if(newValue.length === 0){
          props.pass({});
        }
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    };

    function renderSuggestionsContainer({ containerProps, children }) {
        const { ref, ...restContainerProps } = containerProps;
        const callRef = (isolatedScroll) => {
          if (isolatedScroll !== null) {
            ref(isolatedScroll.component);
          }
        };
      
        return (
          <IsolatedScroll
            ref={callRef}
            {...restContainerProps}
            style={{
              zIndex: 1000,
              backgroundColor: "white",
              maxHeight: "calc(100vh - 200px)",
              overflow: "auto",
              width: "260px",
              border: Boolean(children) && "1px solid #466BFF",
              position: "absolute",
            }}
          >
            {children}
          </IsolatedScroll>
        );
    }

    function renderSectionTitle(section) {
        return (
          <div style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
            <strong>{section.title}</strong>
          </div>
        );
    }

    function getSectionSuggestions(section) {
        return section.users;
    }

    const inputProps = {
        placeholder: 'Search here',
        value,
        onChange,
    };
    
    function onSuggestionSelected(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
      // selectedDataRender(sectionIndex, suggestionValue)
      // console.log(props);
     props.pass(suggestion) ;
    }

    return (
        <div>
         
              <Autosuggest
                    style={{ padding: "16px"}}
                    multiSection={true}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    getSectionSuggestions={getSectionSuggestions}
                    renderSuggestion={renderSuggestion}
                    onSuggestionSelected={onSuggestionSelected}
                    renderSectionTitle={renderSectionTitle}
                    renderSuggestionsContainer={renderSuggestionsContainer}
                    inputProps={inputProps}
                /> 
         
           
        </div>
    )
}

export default DummyAutoSuggest
