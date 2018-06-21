import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {

  render(){
    if(!this.props.book){
      return (
        <div>Select a book</div>
      );
    }

    return(
      <div>
        <h3>Book Details:</h3>
        <div>Book Title:  {this.props.book.title}</div>
        <div>pages: {this.props.book.pages}</div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
