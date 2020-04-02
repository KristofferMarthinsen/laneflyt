import React from "react";
import styled from "@emotion/styled";
// To-Do Components & Hooks
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import { useStitchAuth } from "./StitchAuth";
import { useTodoItems } from "./useTodoItems";


TodoApp.propTypes = {};
export default function TodoApp() {
  const { currentUser } = useStitchAuth();
  const todo = useTodoItems(currentUser.id);
  // const { items, hasHadTodos, actions } = useTodoItems(currentUser.id);
  return (
    
      <Layout>
        
            <h1>Your To-Do List</h1>
          
          <TodoControls {...todo} />
          <TodoList {...todo} />
        
      </Layout>
    
  );
}
const Layout = styled.div`
  background: #eeeeee;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
