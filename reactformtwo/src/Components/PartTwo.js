import React from 'react'
import { useFormContext } from 'react-hook-form'
import '../App.css'

const PartTwo = () => {
  const {register,
    formState: { errors },
} = useFormContext()

  return (
    <div>
       <div className="password_main">
            <label htmlFor="pass">Enter Your Password :</label>
            <br/>
            <input
              type="password"
              name="pass"
              id="pass"
              {...register("password", {
                required: "Please enter a password",
                minLength: {
                  value: 3,
                  message: "Password length should be atleast of 3 character",
                },
              })}
            />
          </div>
          {errors.password && (<h3 className="warning">Please Enter A Password</h3>)}
     

        <div className="contact_container">
            <label htmlFor="phone">Enter Your Mobile Number :</label>
            <br/>
            <input
              type="number"
              name="phone"
              placeholder="Enter Your Mobile Number"
              id="phone"
              {...register("phoneNumber", {
                required: "Please Enter your Mobile Number",
                maxLength: {
                  value: 12,
                  message: "Please Check Your Mobile Number Once",
                },
                minLength: {
                  value: 10,
                  message: "Please Check Your Mobile Number Once",
                },
              })}
            />
          </div>
        {errors.phoneNumber && (<h3 className="warning">Please Enter A Correct Mobile Number</h3>)}

    </div>
  )
}

export default PartTwo
