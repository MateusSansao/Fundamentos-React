import styles from './Task.module.css';
import { FaRegCircle } from "react-icons/fa";
import { CgTrash } from "react-icons/cg";

function Task() {
    return(
        <div className={styles.container}>
            <FaRegCircle />
            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <CgTrash />
        </div>
    )
}

export default Task;