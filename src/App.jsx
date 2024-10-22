import React from 'react';
import { useState } from 'react'
import AddressForm from './components/AddressForm';
import YourReps from './components/YourReps';
import './index.css'

// GET Representatives API call
async function fetchRepresentativessByAddress(address) {
  // console.log("Sending address to API:", address)
  
  // Correctly formatting address data from from
  const formattedAddress = `${address.street}, ${address.city}, ${address.state.toUpperCase()} ${address.zip}`; // Convert state to uppercase (optional)
  
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${formattedAddress}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching representative information:', error);
  }
}

function App() {
  const [repsData, setRepsData] = useState(null);
  const handleSubmit = async (addressData) => {
    const responseData = await fetchRepresentativessByAddress(addressData);
    if (responseData) {
      setRepsData(responseData);
    }
  }

  return (
    <>

      <h1>Who's Your Rep?</h1> 
      <h3>Discover who is representing you on all levels of government</h3>

      
    
      <AddressForm onSubmit={handleSubmit}/>

      {repsData && <YourReps reps={repsData}/>}

      <div className = "footer-bar">
        Built and maintained by <a href = 'https://www.allisonrandel.com/'>Allison Randel</a>
      </div>

    </>
  )
}

export default App