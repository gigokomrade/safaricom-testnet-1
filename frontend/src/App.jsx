import React, {useState} from 'react'

import axios from 'axios'

import './App.css'

const App = () => {

  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')


  const payNow = async (e) => {

    e.preventDefault();
    try {
     
      const response = await axios.post('https://5000-gigokomrade-safaricomte-bgb8vvpob56.ws-eu107.gitpod.io/token', {
        phone,
        amount,
      });

      console.log('Payment response:', response.data);
    } catch (error) {
    
      console.error('Error making payment:', error);
    }
  };


  return (
    <>
    <form className='form'>
      <h1>SAFARICOM <span className='mpesa-text'> M-PESA</span></h1>

      <input
      type='text'
      placeholder='safaricom phone number'
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      />

     <input
      type='number'
      placeholder='Enter amount'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={payNow}>

        PAY NOW

      </button>

        <p>&copy; 2023 Brian Itira. All rights reserved.</p>
  
    
    </form>

    <p className='footer'>&copy; 2023 Brian Itira. All rights reserved.</p>


  
    </>
  )
}

export default App


