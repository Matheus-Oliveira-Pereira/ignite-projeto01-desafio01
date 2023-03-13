import React, {createContext, useState, useContext, useEffect, Dispatch, SetStateAction, ReactNode, Context} from 'react';

export interface TaskListContextInterface {
	list: string[];
	completeList: string[];
    setList: Dispatch<SetStateAction<string[]>>;

    task: string;
    setTask: Dispatch<SetStateAction<string>>;
    handleAddTask: () => void;
    handleToggleCompleteTask: (task: string) => void
}

export const TaskListContext: Context<TaskListContextInterface> = createContext({} as TaskListContextInterface);

const TaskListProvider = ({children}: {children: ReactNode}) => {

	const [list, setList] = useState<string[]>([])
	const [completeList, setCompleteList] = useState<string[]>([])

	const [task, setTask] = useState<string>('')

    const handleAddTask = () => {
        if(list.includes(task)){
            return window.alert("Tarefa ja inserida.")
        }

        setList(tasks => {
            return [task ,...tasks]
        })

        setTask('')
    }

    const handleToggleCompleteTask = (task: string) => {
        const alredyCompleted = completeList.includes(task)

        if(alredyCompleted){
            setCompleteList(completeList.filter(item => task !== item))
        }else{
            setCompleteList(tasks => {
                return [...tasks, task]
            })
        }
    }
    
	return (
		<TaskListContext.Provider value={{
            list, 
            handleAddTask, 
            setList, 
            setTask, 
            task, 
            completeList,
            handleToggleCompleteTask
        }}>
			{children}
		</TaskListContext.Provider>
	);
};

function useTaskList() {
	const context = useContext(TaskListContext);
	if (!context) {
		throw new Error('UseAuth must be used within an AuthProvider');
	}

	return context;
}

export {TaskListProvider, useTaskList};