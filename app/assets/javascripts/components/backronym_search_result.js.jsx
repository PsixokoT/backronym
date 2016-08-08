var BackronymSearchResult = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var items = this.props.data.map(function(item, n) {
      return <BackronymSearchResultItem key={"result_item_" + n} value={item.key} records={item.records} />;
    });
    return (
      <div>
        {items}
      </div>
    );
  }
});
