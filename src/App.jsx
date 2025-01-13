import './global.css'
import Header from './components/header';
import Input from './components/Input';
import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.container}>
        <Input/>
      </div>
    </div>
  )
}

export default App
