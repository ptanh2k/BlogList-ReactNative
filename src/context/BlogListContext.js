import React, {useState} from 'react';
import uuid from 'react-native-uuid';

export const BlogListContext = React.createContext();

const BlogListProvider = props => {
  const [blogList, setBlogList] = useState([
    {
      title: 'Different Ways to Dispatch Actions with Redux',
      id: uuid.v4(),
    },
  ]);

  return (
    <BlogListContext.Provider value={[blogList, setBlogList]}>
      {props.children}
    </BlogListContext.Provider>
  );
};

export default BlogListProvider;
