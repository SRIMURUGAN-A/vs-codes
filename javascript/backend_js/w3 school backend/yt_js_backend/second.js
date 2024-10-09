const event = require('events');
const event_emitter = new event();

event_emitter.emit('messageLogged')



import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// secont react eg

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
}

const roo = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);