/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import {Header} from './src/components/Header';
import {AddBlog} from './src/components/AddBlog';
import {BlogList} from './src/components/BlogList';
import BlogListProvider from './src/context/BlogListContext';

const App = () => {
  return (
    <View>
      <Header />
      <BlogListProvider>
        <AddBlog />
        <BlogList />
      </BlogListProvider>
    </View>
  );
};

export default App;
