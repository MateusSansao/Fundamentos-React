import styles from './Input.module.css'
import { IoIosAddCircleOutline } from "react-icons/io";

function Input() {
    return(
        <div className={styles.containerInput}>
            <input type='text' placeholder='Adicione uma nova tarefa'>
                
            </input>
            <button>
                Criar
                <IoIosAddCircleOutline size={20}/>
            </button>
        </div>
    )
}

export default Input;