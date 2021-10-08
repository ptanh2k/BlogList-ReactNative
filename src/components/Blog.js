import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {BlogListContext} from '../context/BlogListContext';

export const Blog = ({blog}) => {
  const [blogList, setBlogList] = useContext(BlogListContext);
  const deleteBlog = id => {
    setBlogList(() => {
      return blogList.filter(_blog => _blog.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {blog.title}
        <TouchableOpacity onPress={() => deleteBlog(blog.id)}>
          <Icon style={styles.delBtn} name="minuscircleo" size={15} />
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
  },
  delBtn: {},
});
