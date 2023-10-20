
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  //JS CODE
  const [Interest, setInterest] = useState(0)
  const [Principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
    const { name, value } = e.target
    /* console.log(name, value);*/
    /* console.log(typeof(value));*/
    /* console.log(value.match(/^[0-9]+$/));*/
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {//! - to convert into booolean value
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)
      }
    }
  }
  const handleCalculate = (e) => {
    e.preventDefault()
    if (!Principle || !rate || !year) {
      alert('please fill the form')
    }
    else {
      // alert('submited')
      setInterest(Principle*rate*year/100)
    }
  }
const handleReset = (e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>
        <div style={{ height: '130px' }} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1> ₹ {' '} {Interest} </h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField name='principle' className='w-100' value={Principle || ''} onChange={(e) => validate(e)} id="outlined-basic" label=" ₹ Principle Amount" variant="outlined" />
          </div>
          {!isPrinciple &&
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>}
          <div className='mb-3'>
            <TextField className='w-100' name='rate' onChange={(e) => validate(e)} value={rate || ''} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          {!isRate &&
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>}



          <div className='mb-3'>
            <TextField className='w-100' name="year" value={year || ''} id="outlined-basic" label="Year (Yr)" variant="outlined" onChange={(e) => validate(e)} />
          </div>
          {!isYear &&
            <div>
              <p className='text-danger fw-bolder'>Invalid Input</p>
            </div>}
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>

              <Button type='submit' disabled={isPrinciple && isRate && isYear ? false : true} className='bg-success' style={{ width: '200px', height: '50px' }} variant="contained">Calculate</Button>

              <Button onClick={handleReset} style={{ width: '200px', height: '50px' }} variant="outlined">Reset</Button>

            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
