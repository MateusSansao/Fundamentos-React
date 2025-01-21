import styles from './Task.module.css';
import { FaRegCircle } from "react-icons/fa";
import { CgTrash } from "react-icons/cg";

function Task({text, deleteComente}) {

    function handleDeleteComment() {
        console.log('deletar')

        deleteComente(text)
    }

    return(
        <div className={styles.container}>
            <FaRegCircle className={styles.iconCheck}/>
        
            <div className={styles.paragrafo}>
                {text}
            </div>

            <CgTrash className={styles.iconExcluir} onClick={handleDeleteComment}/>
        </div>
    )
}

export default Task;