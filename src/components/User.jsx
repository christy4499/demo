import React from 'react'

function User(props) {
    console.log(props);
    const divStyle ={
        textAlign:"center",
        backgroundColor:"yellow",
        padding:"10px",
        margin:"40px",
    }
  return (
    <div style={divStyle}>
        <h1>inside user functional component</h1>
       {props.uname==='Maxwell'?
        <h3>username is :{props.uname}</h3>:
        <p>user not found</p>}
        <h3>user age:{props.age}</h3>
    </div>
  )
}

export default User
//rfce react functional component