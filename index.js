/** @jsx React.DOM */
React.renderComponent(
  <h1>Hello World</h1>,
  document.getElementById('myDiv')
);

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox url="all.json" />,
  document.getElementById('content')
);
