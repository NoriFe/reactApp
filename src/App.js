import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Message from './components/Message';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
    
      <Profile name="skwara" lastname="nura"/>
      <Profile name="John" lastname="nura"/>
      <Profile name="Tia Mai" lastname="nura"/>
    </div>
  );
}

export default App;
