import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import {useState } from 'react'

type Delete = (content: string) => void
interface TaskProps {
  content: string,
  deleteTask: Delete
}

export function Task({content, deleteTask}:TaskProps) {

  const [check, setCheck] = useState(false)

  // event: MouseEventHandler<HTMLButtonElement>
  function handleCheckTask() {
    {check ? setCheck(false) : setCheck(true)}
  } 

  function handleDelete() {
    deleteTask(content)
  }

  return (
  <div className={styles.task}>
    {check ? 
      <>
        <CheckCircle 
          onClick={handleCheckTask} 
          className={styles.checkCircle}
        />
        <p><s>{content}</s></p> 
      </>
    : 
      <>
        <Circle
          onClick={handleCheckTask}
          className={styles.circle}/>
        <p>{content}</p>
      </>
    }

    <Trash
      onClick={handleDelete} 
      className={styles.trash}/>
  </div>
  )
}