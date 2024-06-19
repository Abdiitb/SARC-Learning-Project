import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import SearchContext from '../Contexts/SearchContext'
import '../FormInputs.css'

export default function NameSearch() {
    const list = useContext(SearchContext);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if (list.name) {
            axios
              .post('https://yearbook.sarc-iitb.org/api/search/search/', {
                query: {
                  multi_match: {
                    fields: ['name', 'hostel', 'department', 'degree', 'program'],
                    query: list.name,
                    fuzziness: 'AUTO',
                    type: 'best_fields',
                  },
                },
              })
              .then(response => {
                const foundUsers = response.data.hits.hits.map(hit => hit._source);
                const mappedUsers = foundUsers.map(user => ({
                  id: user.id,
                  display: user.name,
                  department: user.department,
                  profile_image: user.profile_image,
                  hostel: user.hostel,
                  is_ib: user.is_ib,
                }));
                list.setNameResults(mappedUsers);
              })
              .catch(error => {
                console.error('Error searching users:', error);
              });
          } else {
            list.setNameResults([]); // Clear users when search term is empty
          }
        }, 200); //ye dal diya...isse hi ab constant 6 nhi dikha raha
        //matlb yadi elastic search ke views se ):^ hata denge to bhi sayad ye nhi hoga
    
        return () => clearTimeout(delayDebounceFn);
      }, [list.name]);

    const handleChange = (value) => {
        list.setName(value);
        list.setDisplayName(value);
       
        // fetchData(value);
    }

    return (
        <div className='form-input'>
            <input
                type="text"
                id=""
                name="liststudents"
                placeholder="Search your name"
                value={list.displayName}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
