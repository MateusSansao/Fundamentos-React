import { useState } from 'react';
import styles from './Input.module.css'
import { IoIosAddCircleOutline } from "react-icons/io";

function Input({adicionarTarefa}) {
    const [novaTarefa, setNovaTarefa] = useState("")

    const eventoSubmit = (event) => {
        event.preventDefault();
        adicionarTarefa(novaTarefa);
        setNovaTarefa("");
    }

    return(
        <div className={styles.containerInput}>
            <form onSubmit={eventoSubmit}>
                <input type='text' placeholder='Adicione uma nova tarefa' 
                value={novaTarefa} 
                onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button type="submit" onClick={eventoSubmit}>
                    Criar
                    <IoIosAddCircleOutline size={20}/>
                </button>
            </form>
        </div>
    )
}

export default Input;