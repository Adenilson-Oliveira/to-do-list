import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

type Delete = (content: string) => void
type ChangeDone = (content: string) => void

interface TaskProps {
  done: boolean,
  content: string,
  deleteTask: Delete;
  changeDone: ChangeDone
}

export function Task({done, content, deleteTask, changeDone}:TaskProps) {

  //se for usar o => event: MouseEventHandler<HTMLButtonElement>
  function handleChangeDone() {
    changeDone(content)
  } 

  function handleDelete() {
    deleteTask(content)
  }

  return (
  <div className={styles.task}>
    {done ? 
      <>
        <CheckCircle 
          onClick={handleChangeDone} 
          className={styles.checkCircle}
        />
        <p><s>{content}</s></p> 
      </>
    : 
      <>
        <Circle
          onClick={handleChangeDone}
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