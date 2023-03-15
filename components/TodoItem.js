import { Button, StyleSheet, Text, View } from "react-native";

const TodoItem = ({ text, deleteItem }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <View style={styles.button}>
        <Button title="Delete" onPress={deleteItem} color="red" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 5,
    backgroundColor: "white",
    borderStyle: "dashed",
    borderWidth: 1,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    marginLeft: 20,
  },
});
export default TodoItem;
