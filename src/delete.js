import react from "react"

const  Delete =(props)=>{

    return(<>
        <div className="btn">
            <button onClick={()=>{
                props.onselect(props.id)
            }}>Delete</button>
            <li>{props.Text}</li>
        </div>
    </>
    )
}

export default Delete