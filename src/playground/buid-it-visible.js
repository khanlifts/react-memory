const appRoot = document.getElementById('app');


let show = false;


const onShowDetails = () => {
  show = !show;
  renderTemplate();
};

const renderTemplate = () => {
   const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetails}>{show ? 'Hide Details' : 'Show Details'}</button>
      {show && (
        <div>
          <p>You can now see this</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

renderTemplate();
