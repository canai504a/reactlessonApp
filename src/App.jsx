import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./components/inputTodo";
import IncompleteTodos from "./components/InCompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

const App = () => {
  const [TodoText, setTodoText] = useState("");

  const [inCompleteTodos, setinCompleteTodos] = useState([
    // "ああああ",
    // "いいいい"
  ]);

  const [CompleteList, setCompleteList] = useState([
    // "うううう"
  ]);

  const onchangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    // alert();
    if (TodoText === "") return;
    const newTodos = [...inCompleteTodos, TodoText];
    setinCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert();
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setinCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...CompleteList, inCompleteTodos[index]];
    setinCompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...CompleteList];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...inCompleteTodos, CompleteList[index]];
    setinCompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  return (
    <>
      {/* <div className="input_area">
        <input
          placeholder="TODOを追加"
          value={TodoText}
          onChange={onchangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}
      <InputTodo
        TodoText={TodoText}
        onChange={onchangeTodoText}
        onClick={onClickAdd}
      />

      {/* <div className="imcomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
      <IncompleteTodos
        todos={inCompleteTodos}
        onClickcomplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* <div className="complete_area">
        <p className="title">完了のTODO</p>
        <ul>
          {CompleteList.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
      <CompleteTodos todos={CompleteList} onClickback={onClickBack} />
    </>
  );
};

export default App;
