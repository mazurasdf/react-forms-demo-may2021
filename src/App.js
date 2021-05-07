import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BigForm from './components/BigForm';
import SmallForm from './components/SmallForm';

function App() {
  return (
    <div className="App">
      {/* comment and uncomment to see different components */}
      <BigForm />
      {/* <SmallForm /> */}
    </div>
  );
}

export default App;