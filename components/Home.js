import React, { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TodoItem from "./TodoItem";

function Home() {
  const initialState = [
    {
      id: 1,
      text: "merhaba",
    },
  ];
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(initialState);
  const handleAddTask = () => {
    if (text.trim() === "") {
      return;
    }
    setTodoList([...todoList, { id: todoList.length + 1, text: text }]);
    setText("");
  };
  const deleteItem = (id) => {
    setTodoList(todoList.filter((_id) => _id.id !== id));
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.inputAlanı}
          value={text}
          onChangeText={setText}
        />
        <View>
          <Button style={styles.button} onPress={handleAddTask} title="Add" />
        </View>
      </View>
      <View>
        {todoList.map((item) => {
          return (
            <TouchableOpacity key={item.id}>
              <TodoItem
                text={item.text}
                deleteItem={() => deleteItem(item.id)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
    backgroundColor: "blue",
    padding: 10,
  },
  content: {
    padding: 40,
  },
  button: {
    width: 50,
  },
  box: {
    padding: 8,
    color: "white",
    margin: 10,
  },
  inputAlanı: {
    borderColor: "skyblue",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    width: 250,
    borderRadius: 5,
  },
  list: {
    marginTop: 20,
  },
});
export default Home;
