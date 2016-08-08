var BooksUploaderItem = React.createClass({
  getInitialState: function() {
    return {progress: 0, start: false}
  },

  getDefaultProps: function() {
    return {file:null, download: false}
  },

  propTypes: {
    file: React.PropTypes.any,
    download: React.PropTypes.bool
  },

  componentDidUpdate: function() {
    if (this.props.download && !this.state.start) {
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append("file", this.props.file);

      xhr.onload = xhr.onerror = this.handleXhrComplete;
      xhr.upload.onprogress = this.handleXhrProgress;

      xhr.open("POST", "upload", true);//TODO: move url to props
      xhr.send(formData);
      
      this.setState({start: true});
    }
  },

  handleOnDelete: function(event) {
    this.props.ondelete(event.target.name);
  },

  handleXhrComplete: function(event) {
    var status = event.target.status;
    this.setState({progress: status == 200 ? 100 : 0});
    this.props.ondelete(this.props.file.name);
  },

  handleXhrProgress: function(event) {
    if (this.state.progress < 100) this.setState({progress: (event.loaded / event.total) * 100});
  },

  render: function() {
    var elem;
    if (this.props.download) {
      elem = <progress value={this.state.progress.toString()} min="0" max="100">Текст</progress>
    } else {
      elem = <input type="button" value="Delete" onClick={this.handleOnDelete} name={this.props.file.name} />
    }
    return (
      <li>
        {this.props.file.name}
        {elem}
      </li>
    );
  }
});
