import { useState } from "react";

export default function AddressForm(sendAddressToApp) {
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const [showError, setShowError] = useState(false);
  const [emptyFormError, setEmptyFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const hasInvalidChars = value.match(/[^\d\w\s]/);
    setShowError(hasInvalidChars);
    setAddressData({ ...addressData, [name]: value })
  }; 

  const handleSubmit = (e) => {

    const isEmptyForm = Object.values(addressData).every((field) => !field);
    setEmptyFormError(isEmptyForm ? "You need to fill out the form first!" : null);

    e.preventDefault();
    if(!showError && !isEmptyForm) {
      sendAddressToApp.onSubmit(addressData);
    }
  }

  return (
    <form className='user-address-form' onSubmit={handleSubmit}> 

       <input className="form-input"
        type = "text"
        name = "street"
        placeholder = "123 Street Road"
        value={addressData.street}
        onChange={handleChange}
      />

      <input className="form-input"
        type = "text"
        name = "city"
        placeholder = "City"
        value={addressData.city}
        onChange={handleChange}
      />
      <input className="form-input"
        type = "text"
        name = "state"
        placeholder = "State"
        value={addressData.state}
        onChange={handleChange}
      />
      <input className="form-input"
        type = "text"
        name = "zip"
        placeholder = "Zip Code"
        value={addressData.zip}
        onChange={handleChange}
      />            
      
      {showError && <p className="error-message">Remove any apartment, unit, or special characters in address.</p>}    
      {emptyFormError && <p className="error-message">{emptyFormError}</p>}

      <button type = "submit">Submit</button>
      
    </form>
  )
}