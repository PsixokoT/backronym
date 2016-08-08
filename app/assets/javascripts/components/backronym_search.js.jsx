var BackronymSearch = React.createClass({
  propTypes: {
    query: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  render: function() {
    return (
        <form>
          <input type="text" placeholder="Введите аббревиатуру..." defaultValue={this.props.query} onChange={this.props.onChange}/>
        </form>
    );
  }
});
