import './global.css'
import Header from './components/header';
import Input from './components/Input';
import Task from './components/Task';
import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.container}>
        <Input/>
      </div>

      <div className={styles.task}>

        <header>
          <p>Tarefas criadas 0</p>
          <p>Concluídas 0</p>
        </header>

        <div>
          <Task/>
        </div>

      </div>
    </div>
  )
}

export default App
