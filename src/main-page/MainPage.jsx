import React, { useState } from "react";
import styles from "./MainPage.module.scss";

function MainPage() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState("");
  const [done, setDone] = useState(true);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createTask();
    }
  };

  const createTask = () => {
    value && setTask(value ? [...task, value] : "");
    setValue("");
  };

  const generateTask = (task) => {
    return (
      <div>
        <ul>
          <li>
            <input
              type="checkbox"
              onChange={(e) => setDone(e.target.checked)}
            ></input>
            {task}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>To do App</h2>
        </div>
        <div className={styles.content}>
          <h3>Add things to do</h3>
        </div>
        <div className={styles.inputArea}>
          <input
            placeholder="Type a message"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>

          <input type="submit" onClick={() => createTask()}></input>
        </div>
        <div className={styles.itemsArea}>
          {task.map((task) => generateTask(task))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
