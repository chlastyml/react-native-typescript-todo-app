import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

type Props = {
  visible: boolean;
  onCancel: () => void;
  onAddTask: (enteredTask: string) => void;
};

const TodoInput = ({ visible, onCancel, onAddTask }: Props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskInputHandler = (enteredText: string) => setEnteredTask(enteredText);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task description"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                onAddTask(enteredTask);
                setEnteredTask("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
