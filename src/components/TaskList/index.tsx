import React from 'react';
import { Counter } from '../Counter';

import { Container, ListHeader, ListHeaderTitle, MainContent, MainContentNull } from './styles';
import PranchetaIcon from '../../assets/Clipboard.png'
import { TaskCard } from '../TaskCard';
import { useTaskList } from '../../context/tasks';
 
export const TaskList: React.FC = () => {
    const {list} = useTaskList()

    return (
        <Container>
            <ListHeader>
                <div>
                    <ListHeaderTitle variant='blue'>
                        Tarefas Criadas
                    </ListHeaderTitle>
                    <Counter/>
                </div>
                <div>
                    <ListHeaderTitle variant='purple'>
                        Concluídas
                    </ListHeaderTitle>
                    <Counter completes/>
                </div>
            </ListHeader>

            {
                !list[0] ? <MainContentNull>
                        <div>    
                            <img src={PranchetaIcon}/>
                            <h1>Você ainda não tem tarefas cadastradas</h1>
                            <h2>Crie tarefas e organize seus itens a fazer</h2>
                        </div>
                    </MainContentNull>
                :   <MainContent>
                    {
                        list.map((task) => <TaskCard key={task} content={task}/>)
                    }
                </MainContent>
            }

        </Container>
    );
}