import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import COLORS from '../../consts/colors';
import Todo from './Todo';

const TODOS = props => {
  return (
    <View style={styles.todos}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={props.changeIsComplete}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todos: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    paddingBottom: 60,
  },
});

export default TODOS;
