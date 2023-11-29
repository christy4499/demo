import './Example.css'
import Style from '../myStyle.module.css'

function Example({subject}){
    /* console.log(props);
     */
  
    return(
        <>
     {subject==='React' &&
            <div className='divStyle'>
                <h1>inside the example function component</h1>
                <h3>subject is :<span className={Style.reactsubject}>{subject}</span></h3>
         </div>
}
</>
    )
}
export default Example;