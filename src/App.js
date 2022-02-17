import React from 'react';
import SimpleForm from './Components/chatbot/SimpleForm';
import ChatBox from './Components/chatbot1/ChatBox';
import {BrowserRouter as Routes,Link,Route} from 'react-router-dom'
import Main from './Components/Main';
import Chat from './Components/chatbot/Chat';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" component={Chat} />
      <Route exact path="/autochat" component={SimpleForm} />
      <Route exact path="/" component={Main} />
      <Route exact path="/chat" component={ChatBox} />
    </Routes>
    </div>
  );
}

export default App;
