import React from 'react'
import PartOne from './PartOne'
import PartThree from './PartThree'
import PartTwo from './PartTwo'
import { useFormContext } from 'react-hook-form'
import '../App.css'
import EduInfo from './EduInfo'


const MainForm = (props) => {
    const {methods} = props;
    const {
    reset,} = useFormContext()

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
     reset(alert("Welcome to our platform, You have succesfully registered! 😉"));
  }

  return (
    <>
   <div className="box">
    <h1>Your Registration Form</h1>
    <p>Please fill up the form to proceed!😃</p>
    <form className="main_form" onSubmit={methods.handleSubmit(onSubmit)}>
   <PartOne/>
   <PartTwo/>
   <PartThree/>
   <EduInfo/>
   <input type="submit" className="submit_button" value="Click Here to Submit" />

   <br/>
   
    </form>
   </div>
   
   </>
  )
}

export default MainForm