import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/AntDesign';
import {BlogListContext} from '../context/BlogListContext';

export const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [, setBlogList] = useContext(BlogListContext);

  const addNewBlog = newTitle => {
    setBlogList(prevList => {
      return [...prevList, {id: uuid.v4(), title: newTitle}];
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Add blog..."
        onChangeText={input => setTitle(input)}
        value={title}
        autoCorrect={false}
      />
      <View style={styles.touchable}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            addNewBlog(title);
            setTitle('');
          }}>
          <Text style={styles.btnText}>
            Add <Icon name="plus" size={15} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  textInput: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 2.0,
    borderRadius: 50,
  },
  touchable: {
    alignItems: 'center',
  },
  addBtn: {
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    width: 60,
    backgroundColor: 'cornflowerblue',
  },
  btnText: {
    color: 'white',
  },
});
