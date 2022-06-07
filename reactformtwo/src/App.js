import React from 'react'
import { FormProvider, useForm } from "react-hook-form";
import MainForm from './Components/MainForm'
import './App.css'

const App = () => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
    <div className='app'>
     <MainForm methods={methods}/>
    </div>
    </FormProvider>
    
  )
}

export default App
