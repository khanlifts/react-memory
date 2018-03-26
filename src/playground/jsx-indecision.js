console.log('App.js is running');

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Dont overload your brain with simple decisions',
  options: []
};

const appRoot = document.getElementById('app');


const onFormSubmit = (e) => {
  e.preventDefault();
  // get form input
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const onRemoveAllButton = () => {
  app.options = [];
  renderTemplate();
};

const removeOne = () => {
  app.options.splice(-1, 1);
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor((Math.random() * app.options.length));
  const options = app.options[randomNum];
  alert(options);
};

const renderTemplate = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>Rand Num</button>
    <button onClick={removeOne}>Delete Last</button>
    <button onClick={onRemoveAllButton}>Remove All</button>
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
        // or shorthand
        // app.options.map((option) => <li key={option}>{option}</li> )
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
}

renderTemplate();
