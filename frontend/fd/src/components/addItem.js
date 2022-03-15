import React, { useState } from 'react'
import axios from 'axios';

function AddItem({adddata}) {
  const [formName, setfn] = useState('');
  const [formAge, setage] = useState('');

  const [formStatus, setFormStatuse] = useState('');
 
  
  const onSubmit = async (e) => {
    try{
      e.preventDefault();
      if(formName && formAge) {
        setFormStatuse('loading')
        const formData = {
          name: formName,
          age: formAge
        }
        const apiData = await axios.post('http://localhost:8000/test/check', formData)
        console.log(apiData)
        if(apiData.status === 200 && apiData.data.success === 1) {
          setFormStatuse('success');
          adddata(formData)
        }
        else{
          setFormStatuse('error')
        }
      }
    }
    catch(err){
      setFormStatuse('error')
    }
    
    
    
    
  };

  return (
    <form>
      <input
        type="text"
        value={formName}
        placeholder="Name"
        onChange={(e) => setfn(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={formAge}
        placeholder="Age"
        onChange={(e) => setage(e.target.value)}
      />
      <br />
      <button onClick={(e) => onSubmit(e)}>Save</button>
      <br/>
      {formStatus}
    </form>
  );
}

export default AddItem