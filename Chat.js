// // WhatsAppChat.js (Parent Component)
// import React, { Component } from 'react';
// import ContactList from './ContactList';
// import ChatWindow from './ChatWindow';

// class Chat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedContact: null
//     };
//   }

//   selectContact = (contact) => {
//     this.setState({ selectedContact: contact });
//   };

//   render() {
//     const { selectedContact } = this.state;

//     return (
//       <div className="whatsapp-chat">
//         <ContactList selectContact={this.selectContact} />
//         <ChatWindow selectedContact={selectedContact} />
//       </div>
//     );
//   }
// }

// export default Chat;
import React, { useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import ChatWindow from './ChatWindow';
import Navbar from './Navbar';
import MainPage from './MainPage';

const { Content } = Layout;

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [initialData, setInitialData] = useState({});

  const contacts = [
    { id: 1, name: 'Parkavi', lastSeen: 'Today', profilePic: 'profile1.jpg' },
    { id: 2, name: 'Maha', lastSeen: 'Yesterday', profilePic: 'profile2.jpg' },
    { id: 3, name: 'Nila', lastSeen: '2 days ago', profilePic: 'profile3.jpg' },
    { id: 4, name: 'Nittu', lastSeen: '3 days ago', profilePic: 'profile4.jpg' },
    { id: 5, name: 'Priyanka', lastSeen: '4 days ago', profilePic: 'profile5.jpg' }
  ];

  return (
    <Router>
      <Navbar />
      <Content className="app-content">
        <div className="grid-container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
                  {selectedContact && <ChatWindow selectedContact={selectedContact} initialData={initialData} setInitialData={setInitialData} />}
                </>
              }
            />
            <Route
              path="/mainpage/:id"
              element={<MainPage initialData={initialData} setInitialData={setInitialData} />}
            />
          </Routes>
        </div>
      </Content>
    </Router>
  );
}

export default App;
