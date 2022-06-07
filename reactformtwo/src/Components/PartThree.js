import React from 'react'
import { useFormContext } from 'react-hook-form'
import '../App.css'

const PartThree = () => {
    const {register,
    formState: { errors },
} = useFormContext()
  return (
    <div>
         <div className="country_container">
            <label htmlFor="country">Select From Where You Belong :</label>
            <br/>
            <select name="country" id="country" {...register("country")}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="Age_container">
            <label htmlFor="dob">Enter Your DOB :</label>
            <br/>
            <input
              type="date"
              name="dob"
              id="dob"
              {...register("dob", { required: true })}
            />
          </div>
          {errors.dob && <h3 className="warning">Please enter date of birth</h3>}

    <div className="gender_container">
            <label>What's Your Gender :</label>
            <div className="inner_gender_container">
              <input
                className="radio_container"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                {...register("gender", {
                  required: "Please Select Your Gender",
                })}
              />
              <label htmlFor="male">Male</label>
              <input
                className="radio_container"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                {...register("gender", {
                  required: "Please Select Your Gender",
                })}
              />
              <label htmlFor="female">Female</label>
              <input
                className="radio_container"
                type="radio"
                id="other"
                name="gender"
                value="other"
                {...register("gender", {
                  required: "Please Select Your Gender",
                })}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        {errors.gender && (<h3 className="warning">Please Select Your Gender</h3>)}
        <br/>

        <div className="checkbox_container">
          <input
            type="checkbox"
            id="correct"
            value="correct"
            name="correct"
            {...register("correct", { required: true })}
          />
          <label htmlFor="correct"> Check Here & Confirm that all the above Information are Correct</label>
        </div>
        {errors.correct && (<h3 className="warning">Please Select The Checkbox To Proceed</h3>)}

    </div>
  )
}

export default PartThree