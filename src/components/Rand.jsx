import React from "react";

class Rand extends React.Component{
    constructor(){
        super()
        this.state={cname:"POLO GT"}
    }
    changestate=(data)=>{
        this.setState({cname:data})
    }
    render(){
        return(
            <div>
                <h1>inside rand class component</h1>
                <h3>carname is:{this.state.cname}</h3>
                <button onClick={()=>this.changestate('swift')} type='button' style={{backgroundColor:'black',color:'white',padding:'20px',margin:'20px'}}>click</button>
            </div>
        )
    }
    
}
export default Rand;