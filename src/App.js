import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" Menit2 = "About"/>
    <div className="container">
        <TextForm title="Enter some text here"/>
    </div>
    </>
  );
}

export default App;
