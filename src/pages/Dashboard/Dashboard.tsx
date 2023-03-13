import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { InputText } from '../../components/InputText';
import { TaskList } from '../../components/TaskList';
import { Container } from './styles';

export const Dashboard: React.FC = () => {

  return (
    <Container>
      <InputText/>
      <TaskList/>
    </Container>
  );
}