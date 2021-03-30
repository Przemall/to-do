import React, { useState } from "react";
import styles from "./MainPage.module.scss";

function MainPage() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const setDone = (value, taskName) => {
    const index = tasks.findIndex((task) => task.name === taskName);
    const newTasks = [...tasks];
    newTasks[index] = { name: taskName, isDone: value };
    setTasks(newTasks);
  };

  const deleteTask = (taskName) => {
    const index = tasks.findIndex((task) => task.name === taskName);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createTask();
    }
  };

  const createTask = () => {
    value && setTasks([...tasks, { name: value, isDone: false }]);
    setValue("");
  };

  const generateTask = (task) => {
    return (
      <div>
        <ul>
          <li
            className={`${styles.isNotDone}
              ${task.isDone ? styles.isDone : styles.isNotDone}`}
          >
            <div className={styles.isDoneBox}>
              <input
                type="checkbox"
                onClick={(e) => setDone(e.target.checked, task.name)}
              ></input>
            </div>
            <div className={styles.task}>{task.name}</div>

            <div className={styles.deleteBox}>
              <input
                type="submit"
                value="delete"
                onClick={(e) => deleteTask(task.name)}
              ></input>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>To do App</h2>
        </div>
        <div className={styles.content}>
          <h3>Add things to do</h3>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.inputsInner}>
            <input
              placeholder="Type a task"
              type="text"
              value={value}
              maxLength={128}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            ></input>
            <input type="submit" onClick={() => createTask()}></input>
          </div>
        </div>
        <div className={styles.itemsArea}>
          {tasks.map((task) => generateTask(task))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
