import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '1번', checked: true },
    { id: 2, text: '2번', checked: true },
    { id: 3, text: '3번', checked: false },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
  );
};

export default App;
