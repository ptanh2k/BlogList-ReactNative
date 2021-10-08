import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {BlogListContext} from '../context/BlogListContext';

import {Blog} from './Blog';

export const BlogList = () => {
  const [blogList, setBlogList] = useContext(BlogListContext);
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={blogList}
        renderItem={({item}) => {
          return (
            <Blog blog={item} blogList={blogList} setBlogList={setBlogList} />
          );
        }}
      />
    </View>
  );
};
