import React from 'react'
import { useFormContext } from 'react-hook-form'
import '../App.css'

const PartOne = () => {
    const {register,
    formState: { errors },
} = useFormContext()
  return (
    <div>
      <div className="form_mail">
          <label htmlFor="email">Enter Your Email ID :</label>
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id="email"
            {...register("email", { 
                required: true , 
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i})}/>
        </div>
        {errors.email && <h3 className="warning">Please enter your Email</h3>}

          <div className="first_name">
            <label htmlFor="firstname">Your First Name :</label>
            <br/>
            <input
              type="text"
              name="firstname"
              placeholder="Enter Your First Name"
              id="firstname"
              {...register("firstname", {
                required: true,
                minLength: 1,
                maxLength: 12,
              })}
            />
          </div>
           {errors.firstname?.type === "required" && (<h3 className="warning">Your First Name is Missing</h3>)}
          <div className="last_name">
            <label htmlFor="lastname">Your Last Name :</label>
            <br/>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Your Last Name"
              id="lastname"
              {...register("lastname", {
                required: true,
                minLength: 1,
                maxLength: 12,
              })}
            />
          </div>
        {errors.lastname?.type === "required" && (<h3 className="warning">Your Last Name is Missing</h3>)}

    </div>
  )
}

export default PartOne
