import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App'

const HooksFrom = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const historyReviews = useHistory();


    const handleOrderButton = () => {
      
      const url = `/home`;
      historyReviews.push(url);
    };
  const { register, handleSubmit,  watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5001/userLogin`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
        
    
      })
    
      .then(res => res.json())
      .then(success =>{

        handleOrderButton();
        setLoggedInUser(success);
        // alert("Are you sure to send data");
        // handleCourse();
        console.log(success)
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          style={{
            height: '50px',
            width: '100%',
            border: 'none',
            borderRadius: '10px',
            backgroundColor:"whitesmoke"
          }}
          name="emails"
          placeholder="Enter Your email"
          ref={register({ required: true })}
        />
        <br /> <br /> 
        <input
          type="number"
          style={{
            height: '50px',
            width: '100%',
            border: 'none',
            borderRadius: '10px',
            backgroundColor:"whitesmoke"
          }}
          name="passes"
          placeholder="Enter Your password"
          ref={register({ required: true })}
        />{' '}
        <br /> <br /> 
        <input 
          style={{
            height: '50px',
            width: '100%',
            border: 'none',
            borderRadius: '10px',
          }}
          type="submit"
        />
      </form>
    </div>
  )
}

export default HooksFrom
