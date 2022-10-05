import './global.css' 
import Logo from './assets/LogoRocket.svg'
import styles from './App.module.css'
import { ListChecks, PlusCircle } from 'phosphor-react'

function App() {

  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="LogoRocket"/>
        <h1>to<span>do</span></h1>
      </header>

      <form className={styles.formToDo} onSubmit={(e) => {e.preventDefault()}}>
        <input type="text" placeholder='Adicione uma nova'/>
        <button type='submit'><span>Criar</span> <PlusCircle size={22} /></button>
      </form>

      <div className={styles.containerToDos}>

        <div className={styles.info}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas<span>0</span></p>
        </div>
        
        <div className={styles.toDos}>
          <ListChecks size={60}/>
          <h3>Você ainda não tem tarefas cadastradas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>

    </div>
  )
}


export default App
