//Import a class from css to react
import PropTypes from "prop-types";
import "./task.css"
export function Task({name}){
    const cardDiv = {
        backgroundColor:"#2f4f30",
        padding: "20px",
        height : "200px"

    }
    return <>
        <div style={cardDiv}>
            <h1 style={{color:"#ffffff"}}>Hello Wordl</h1>
            <h2 className="subtitle"style={name ? {color:"green"} : {color:"red"}}> 
                {name ? "I'm hungry" : "I'm Sleepy"}  
            </h2>
            <p className={name ? "subtitle" : "title"}>Holi</p>
        </div>
    </>

    
}
Task.propTypes ={
    name : PropTypes.bool 
}

//If i need to autocomplete a code command y have to press ctrl + spacebar