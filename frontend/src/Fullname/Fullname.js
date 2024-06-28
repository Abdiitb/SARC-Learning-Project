import React, { useContext } from 'react'
import NameSearch from './nameSearch'
import NameResultsList from './nameResultsList';
// import SelectedOptionsList from '../SelectedOptionsList';
import SearchContext from '../Contexts/SearchContext';
// import '.../FormInputs.css'


export default function FullName({ data, setData }) {
  const resultsList = useContext(SearchContext);

   return (
    <div className="form-input" style={{ display: 'flex', alignItems: 'center' }}>
      {/* Profile Image */}
      {data.profile_image && (
        <img
          src={`https://yearbook.sarc-iitb.org${data.profile_image}`}
          alt="Profile"
          style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }}
        />
      )}

      <div style={{ flex: 1 }}>
        <label htmlFor="exampleFormControlInput1">Full Name</label>
        <NameSearch />
        {resultsList && resultsList.nameResults && resultsList.nameResults.length > 0 && (
          <NameResultsList data={data} setData={setData} />
        )}
      </div>
    </div>
  );
}
