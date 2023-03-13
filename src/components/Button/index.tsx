import React from 'react';

import { Container, Icon } from './styles';
import PlusIcon from '../../assets/plus.png'
import { useTaskList } from '../../context/tasks';

export const Button: React.FC = () => {
    const {handleAddTask} = useTaskList()
    return (
        <Container onClick={handleAddTask}>
            <strong>
                Criar
            </strong>
            <Icon
                src={PlusIcon}
            />
        </Container>
    );
}