import './global.css' 
import Logo from './assets/LogoRocket.svg'
import styles from './App.module.css'
import { ListChecks, PlusCircle} from 'phosphor-react'
import { Task } from './components/Task'
import { useState } from 'react'



function App() {

  const [tasks, setTasks] = useState([
    {content: 'Comprar maçã'},
    {content: 'Passear com Jack'},
  ])

  function onDeleteTask(taskToDelete: string):void {
    console.log(taskToDelete)
    setTasks(tasks.filter(task => task.content !== taskToDelete))
  }


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

            {
              tasks.length >= 1 ?
                tasks.map(
                  (task) => 
                      <Task 
                        key={task.content}
                        deleteTask={onDeleteTask} 
                        content={task.content} 
                      />
                ):
                <div className={styles.empty}>
                    <ListChecks  size={60}/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }

          </div>
          
        </div>
      </div> 

    </div>
  )
}


export default App
