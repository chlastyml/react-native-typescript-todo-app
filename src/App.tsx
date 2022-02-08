import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import { Task } from "./types";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [taskArray, setTaskArray] = useState<Task[]>([]);

  const removeTaskHandler = (taskId: string) =>
    setTaskArray((taskArray) => taskArray.filter((task) => task.id != taskId));

  const toggleTask = (taskId: string) => {
    const copyTaskArray = [...taskArray];

    copyTaskArray.find((task) => task.id === taskId)?.toggle();

    setTaskArray(copyTaskArray);
  };

  const renderTaskItem = ({ item }: { item: Task }) => {
    return (
      <TodoItem
        item={item}
        onToggleFinish={toggleTask}
        onDelete={removeTaskHandler}
      />
    );
  };

  const handleAddTodo = (enteredText: string) => {
    if (enteredText.length < 1) {
      return;
    }

    const task = {
      id: Math.random().toString(16).slice(-5),
      finished: false,
      description: enteredText,
      toggle: () => {
        task.finished = !task.finished;
      },
    };

    setTaskArray((tasks) => [...tasks, task]);
    setIsAddMode(false);
  };

  const cancelTodoAdditionHandler = () => {
    setIsAddMode(false);
  };

  console.log("taskArray", taskArray);

  return (
    <View style={styles.container}>
      {/* For simplification purpose we don't install SafeAreaView but use padding to make "fake" save SaveAreaView */}
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <TodoInput
        visible={isAddMode}
        onAddTask={handleAddTodo}
        onCancel={cancelTodoAdditionHandler}
      />
      <FlatList
        renderItem={renderTaskItem}
        data={taskArray}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
