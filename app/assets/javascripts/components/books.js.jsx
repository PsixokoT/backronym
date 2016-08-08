var Books = React.createClass({
  propTypes: {
    count: React.PropTypes.node,
    books: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <BooksUploader />
      </div>
    );
  }
});
