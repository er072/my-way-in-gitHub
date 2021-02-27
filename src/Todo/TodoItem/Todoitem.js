import React from 'react'
import PropTypes from 'prop-types'
// import Context from '../context'


const styles = {
    li:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:'.5rem',
        border:"1px solid blue",
        borderRadius:"20px",
        marginBottom:"5px"

    },
    input:{
        marginRight:"5px",
    },


}



function TodoItem({todo,index,onChange}){
    let classes = [];

    if(todo.complated){
        classes.push("done")
    }

    return(
        <li style= {styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" 
                checked = {todo.completed}
                style={styles.input} 
                onChange = {
                    
                    ()=> onChange(todo.id)}
                    
                />
                <strong>{ index+ 1 + " "}</strong>
                {todo.title}
            </span>
            <button className="rm">&times;</button>
            
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired,
}

    export default TodoItem