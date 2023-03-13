import React from 'react';

import { Container } from './styles';
import TrashIcon from '../../assets/trash.png'
import CheckIcon from '../../assets/Vector.png'
import { useTaskList } from '../../context/tasks';

interface TaskCardProps {
  content: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({content}) => {
  const {completeList, handleToggleCompleteTask, setList, list} = useTaskList()

  return (
    <Container isFull={completeList.includes(content)}>
        <button onClick={() => handleToggleCompleteTask(content)}>
            {completeList.includes(content) && <img src={CheckIcon} />}
        </button>
        <h1>
            {content}
        </h1>
        <img src={TrashIcon} onClick={() => setList(list.filter((task) => task !== content))}/>
    </Container>
  );
}