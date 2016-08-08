var BackronymSearchResultItem = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    records: React.PropTypes.array
  },

  getStyleText: function(rec, n) {
    var i = rec.key.indexOf(this.props.value);
    var words = rec.text.split(/\s+/);
    var selectText = words.splice(i, this.props.value.length).join(" ");

    i = rec.text.indexOf(selectText);

    return (
        <li key={"rec_item_" + n}>
          <p>{rec.text.slice(0, i)}<b>{selectText}</b>{rec.text.slice(i + selectText.length)}</p>
        </li>
    );
  },

  render: function() {
    var self = this;
    var records = this.props.records.map(function(rec, n) {
      return self.getStyleText(rec, n);
    });
    return (
        <div>
          <div>Value: {this.props.value}</div>
          <ul>
            {records}
          </ul>
        </div>
    );
  }
});
