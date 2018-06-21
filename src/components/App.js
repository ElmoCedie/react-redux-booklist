import React from 'react';

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-details'

class App extends React.Component {
  render() {
      return(
        <div>
            <BookList/>
            <BookDetail/>
        </div>
      );
  };
}

export default App;
