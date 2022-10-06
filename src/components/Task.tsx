import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { MouseEventHandler, useState } from 'react'

interface TaskProps {
  content: string
}

export function Task({content}:TaskProps) {

  const [check, setCheck] = useState(false)

  // event: MouseEventHandler<HTMLButtonElement>
  function handleCheckTask() {
    {check ? setCheck(false) : setCheck(true)}
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

    <Trash className={styles.trash}/>
  </div>
  )
}