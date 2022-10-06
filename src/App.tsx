import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ListChecks, PlusCircle} from 'phosphor-react'
import { Task } from './components/Task'

import Logo from './assets/LogoRocket.svg'
import styles from './App.module.css'
import './global.css' 


export function App() {

  const [tasks, setTasks] = useState([
    {done: true, content: 'Fazer o desafio 01 do Ignite'},
    {done: false, content: 'Comprar maçã'},
    {done: false, content: 'Passear com meu cachorrinho'},
  ])

  const [task, setTask] = useState('')

  const [tasksDone, setTasksDone] = useState(0)

  useEffect(() => {
    let countTasksDone = 0
    tasks.forEach((el) => {
      if(el.done) {
        countTasksDone += 1
      }
    })
    console.log(countTasksDone)
    setTasksDone(countTasksDone)
  }, [tasks])

  function onDeleteTask(taskToDelete: string):void {
    setTasks(tasks.filter(task => task.content !== taskToDelete))
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    const newTask = {done: false, content: task}

    if(tasks.some(el => newTask.content === el.content)) {
      alert('Voçê já possui uma tarefa igual a essa para fazer!')
      return
    }

    setTasks([...tasks, newTask])
    setTask('')
  }

  function handleCreateNewTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  // event: ForwardRefExoticComponent<IconProps>
  function handleChangeDone(content: string) {
    const taskToChangeState = tasks.find(el => el.content === content)

    if(taskToChangeState) {
      const indexOfTask = tasks.indexOf(taskToChangeState)
      setTasks(tasks.map((task, i) => {
        if(i === indexOfTask){
          task.done = task.done ? false : true
        }
        return task
      }) )
    }
  }

  return (
    <div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="LogoRocket"/>
          <h1>to<span>do</span></h1>
        </div>
      </header>

      <form className={styles.formToDo} onSubmit={handleAddTask}>
        <input value={task} onChange={handleCreateNewTask} type="text" placeholder='Adicione uma nova' required/>
        <button type='submit'><span>Criar</span> <PlusCircle className={styles.plusCircle} /></button>
      </form>


      <div className={styles.containerToDos}>
        <div className={styles.infoToDos}>
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{tasksDone} de {tasks.length}</span></p>
        </div>
        
        <main className={styles.toDos}>
          <div className={styles.tasks}>
            {
              tasks.length >= 1 ? tasks.map((task) => <Task key={task.content} done={task.done} changeDone={handleChangeDone} deleteTask={onDeleteTask} content={task.content} />)
              :
              <div className={styles.empty}>
                <ListChecks  size={60}/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            }
          </div>
        </main>
      </div> 

    </div>
  )
}
