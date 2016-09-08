console.log("Insanity Check")

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="title">
        <h1>This is your last resort.</h1>
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
