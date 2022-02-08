import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types";

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

type Props = {
  item: Task;
  onToggleFinish: (id: Task["id"]) => void;
  onDelete: (id: Task["id"]) => void;
};

const TodoItem = ({ item, onToggleFinish, onDelete }: Props) => {
  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => onToggleFinish(item.id)}
      onLongPress={() => onDelete(item.id)}
    >
      <View
        style={[
          styles.listItem,
          { backgroundColor: item.finished ? "#afa" : "#ccc" },
        ]}
      >
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(TodoItem);
