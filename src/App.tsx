import './global.css' 
import Logo from './assets/LogoRocket.svg'
import styles from './App.module.css'
import { CheckCircle, Circle, ListChecks, PlusCircle, Trash} from 'phosphor-react'
import { Task } from './components/Task'

function App() {

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="LogoRocket"/>
          <h1>to<span>do</span></h1>
        </div>
      </header>

      <form className={styles.formToDo} onSubmit={(e) => {e.preventDefault()}}>
        <input type="text" placeholder='Adicione uma nova'/>
        <button type='submit'><span>Criar</span> <PlusCircle className={styles.plusCircle} /></button>
      </form>

      <div className={styles.containerToDos}>

        <div className={styles.infoToDos}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas <span>0</span></p>
        </div>
        
        <div className={styles.toDos}>
          
          <div className={styles.tasks}>

            <Task 
              // check={false}
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit'
            />
            <Task 
              // check={true}
              content='Lorem ipsum dolor sit amalfalçet consectetur adipisicing elit.'
            />

          </div>
          
          <div className={styles.empty}>
            <ListChecks  size={60}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          
            
          
        </div>
      </div> 

    </div>
  )
}


export default App
