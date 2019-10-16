import React, { Component } from "react";

import { Task } from "./models/task";
import { NewTaskForm } from "./components/NewTaskForm";
import { TasksList } from "./components/TasksList";
import  Counter  from "./components/Counter";
import { Board } from "./components/Board";
import { RestartBtn } from "./components/RestartBtn";
import { GameStateBar } from "./components/GameStateBar";
import { GameState } from "./constant/constants";
import  SimpleMap  from "./components/SimpleMap";

interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };

  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
        <Counter/>
        <Board />
                <div>
                    <span className="description t1"> Player(X) </span>
                    <span className="description t2"> Computer(O) </span>
                </div>
                <RestartBtn />
                <GameStateBar />
                <SimpleMap/>
      </div>
    );
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };
}

export default App;
