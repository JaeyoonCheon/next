import { NextPage } from "next";
import styled from "styled-components";

import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "task1", color: "red", checked: false },
  { id: 2, text: "task2", color: "orange", checked: false },
  { id: 3, text: "task3", color: "yellow", checked: true },
  { id: 4, text: "task4", color: "green", checked: true },
  { id: 5, text: "task5", color: "blue", checked: false },
  { id: 6, text: "task6", color: "navy", checked: false },
];

const index: NextPage = () => {
  return <TodoList todos={todos}></TodoList>;
};

export default index;
