import React from 'react'
import { useFieldArray,useFormContext } from 'react-hook-form'
import './EduInfo.css'

const EduInfo = () => {
    const {register,
} = useFormContext()
const {append,fields,remove} = useFieldArray({
    name: "users"
});
  return (
    <div>
      <div className="edumain">
          <h1>Add Education<br/><span className='any'>(Optional)</span></h1>
  {
      fields.map((item,index) => (
          <>
          <div className="institute">
      <label>Enter Name Of The Institute: </label>
      <br/>
    <input type="text" className="form-control" placeholder="Name Of The Institute" {...register("institute")} name={`users[${index}].institute`} defaultValue={item.institute}/>
  </div>
  <div className="stream">
       <label>Enter Your Stream: </label>
       <br/>
    <input type="text" className="form-control" placeholder=" Your Stream" {...register("stream")} name={`users[${index}].stream`} defaultValue={item.stream}/>
  </div>
   <div className="board">
        <label>Enter Your Board: </label>
        <br/>
    <input type="text" className="form-control" placeholder="Enter Your Board" {...register("board")} name={`users[${index}].board`} defaultValue={item.board}/>
  </div>
    <div className="state">
      <label for="state">Select Your State: </label>
      <br/>
      <select className="form-control" id="state" {...register("institute")} name={`users[${index}].state`} defaultValue={item.state}>
       <option value="">Select Your State</option>
       <option value="UP">UP</option>
       <option value="Bengal">Bengal</option>
       <option value="Gujrat">Gujrat</option>
       <option value="Maharastra">Maharastra</option>
     </select>
  </div>
  <div>
   <button onClick={()=>remove({
    institute: "",
    stream: "",
    board: "",
    state:""
    })}>Remove Education</button>
  </div>
        </>
      ))
  }
</div>
<button className='one' onClick={()=>append({
    institute: "",
    stream: "",
    board: "",
    state:""
    })}>Click Here Add Education</button>

</div>
  )
}

export default EduInfo
