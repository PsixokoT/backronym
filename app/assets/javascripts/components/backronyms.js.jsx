var Backronyms = React.createClass({
  getInitialState: function() {
    return {query: this.props.initQuery, data: this.props.initData}
  },

  propTypes: {
    initQuery: React.PropTypes.string,
    initData:  React.PropTypes.array
  },

  handlerOnChange: function(event) {
    var url = "?q=" + event.target.value;
    history.pushState(null, null, url);

    var xhr = new XMLHttpRequest();

    xhr.onload = xhr.onerror = this.handleXhrComplete;
    xhr.upload.onprogress = this.handleXhrProgress;

    xhr.open("GET", "search" + url, true);//TODO: move url to props
    xhr.send(null);
  },

  handleXhrComplete: function(event) {
    var status = event.target.status;
    if (status == 200) {
      var response = JSON.parse(event.target.response);
      this.setState({query: response.query, data: response.data});
    }
  },

  handleXhrProgress: function(event) {

  },

  render: function() {
    return (
      <div>
        <BackronymSearch query={this.state.query} onChange={this.handlerOnChange} />
        <BackronymSearchResult data={this.state.data} />
      </div>
    );
  }
});
