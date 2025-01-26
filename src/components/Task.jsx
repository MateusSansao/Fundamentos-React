import styles from './Task.module.css';
import { FaRegCircle } from "react-icons/fa";
import { CgTrash } from "react-icons/cg";
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";


function Task({text, deleteComente, updateTaskConclusion }) {

    const [taskCompleted, setTaskCompleted] = useState(true);

    function handleTaskCompleted() {
        setTaskCompleted((prevTaskCompleted) => !prevTaskCompleted);

        updateTaskConclusion(1)
    }

    function handleFalse() {
        setTaskCompleted((prevTaskCompleted) => !prevTaskCompleted);

        updateTaskConclusion(-1)
    }

    function handleDeleteComment() {
        deleteComente(text)
    }

    return(
        <div className={styles.container}>
            <button>
                {taskCompleted ? <FaRegCircle className={styles.iconCheck} onClick={handleTaskCompleted}/> : <FaCircleCheck  className={styles.iconCheck} onClick={handleFalse}/>}
            </button>
        
            <div className={taskCompleted ? styles.paragrafo : styles.paragrafoP} >
                {text}
            </div>

            <CgTrash className={styles.iconExcluir} onClick={handleDeleteComment}/>
        </div>
    )
}

export default Task;