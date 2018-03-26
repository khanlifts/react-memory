let count = 0;

const addOne = () => {
  count++;
  renderTemplateTwo();
}

const minusOne = () => {
  count--;
  renderTemplateTwo();

}
const reset = () => {
  count = 0;
  renderTemplateTwo();
}


const renderTemplateTwo = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>minusOne</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

renderTemplateTwo();
