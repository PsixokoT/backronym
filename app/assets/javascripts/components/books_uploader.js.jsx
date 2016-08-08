var BooksUploader = React.createClass({
  getInitialState: function() {
    return {files: [], download: false}
  },

  handleBooksChange: function(e) {
    var a = this.state.files, b = [].slice.call(e.target.files);
    var c = a.concat(b.filter(function (item) {
      for (var key in a) {
        if (a[key].name == item.name) return false;
      }
      return true;
    }));

    this.setState({
      files: c
    });
    e.target.value = ''
  },

  handleBooksListChange: function(files) {
    var data = {files: files};
    if (this.state.download) {
      data.download = files.length > 0;
    }

    this.setState(data);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({download: true});
  },

  render: function() {
    return (
      <div>
        <form className="bookForm form-horizontal form" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input type="submit"
                 className="btn btn-primary"
                 value="Загрузить"
                 disabled={this.state.files.length == 0 || this.state.download}/>
          <input type="file" id="file"
                 accept="text/txt"
                 multiple
                 onChange={this.handleBooksChange}
                 disabled={this.state.download}
                 style={{color:'transparent'}} />
        </form>
        <BooksUploaderList files={this.state.files} onchange={this.handleBooksListChange} download={this.state.download} key="list"/>
      </div>
    );
  }
});