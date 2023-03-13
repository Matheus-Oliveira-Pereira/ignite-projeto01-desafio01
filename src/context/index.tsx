import React from 'react';
import { TaskListProvider } from './tasks';

interface AppProviderProps{
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <>
        <TaskListProvider>
            {children}
        </TaskListProvider>
    </>
  );
};