import React from 'react';
import { useTaskList } from '../../context/tasks';

import { Container } from './styles';

interface CounterProps {
  completes?: boolean;
}

export const Counter: React.FC<CounterProps> = ({completes = false}) => {
  const {list, completeList} = useTaskList()
  const display = completes ? `${completeList.length} de ${list.length}` : `${list.length}`
  return (
    <Container>
        {display}
    </Container>
  );
}