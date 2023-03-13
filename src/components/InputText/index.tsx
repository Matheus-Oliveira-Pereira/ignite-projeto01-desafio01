import React, { useState } from 'react';
import { useTaskList } from '../../context/tasks';
import { Button } from '../Button';

import { Container, Input } from './styles';

export const InputText: React.FC = () => {

  const {setTask, task} = useTaskList()

  return (
    <Container>
        <Input
            placeholder='Adicione uma nova tarefa'
            title='Adicione uma nova tarefa'
            type='text'
            value={task}
            onChange={e => setTask(e.target.value)}
        />
        <Button onClick={() => console.log(task)}/>
    </Container>
  );
}