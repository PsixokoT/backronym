var BooksUploaderList = React.createClass({
  getDefaultProps: function() {
    return {files:[], download: false}
  },

  propTypes: {
    files: React.PropTypes.array,
    download: React.PropTypes.bool
  },

  handleDeleteFile: function(name) {
    this.props.onchange(this.props.files.filter(function(file) {
      return name !== file.name;
    }));
  },

  render: function() {
    var self = this;
    var files = this.props.files.map(function(file) {
      return <BooksUploaderItem file={file} key={"item_" + file.name} ondelete={self.handleDeleteFile} download={self.props.download}/>;
    });

    return (
      <ul>
        {files}
      </ul>
    );
  }
});
