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
  const [selectedContact, setSelectedContact] = useState('');
  const [initialData, setInitialData] = useState({});

  const contacts = ([
    { id: 1, name: 'Parkavi' },
    { id: 2, name: 'Maha' },
    { id: 3, name: 'Nila' },
    { id: 4, name: 'Nittu' },
    { id: 5, name: 'Priyanka' }
  ]);

  return (
    <Router>
      <Navbar />
      <Content className="app-content">
        <div className="grid-container">
          <Routes>
            <Route exact path="/" element={
              <>
                <div className="contact-list">
                  <ContactList contacts={contacts} setSelectedContact={setSelectedContact} />
                </div>
                <div className="chat-window">
                  {selectedContact && <ChatWindow contacts={contacts} selectedContact={selectedContact} initialData={initialData} setInitialData={setInitialData} />}
                </div>
              </>
            } />
            <Route path="/"element={<MainPage />}
            />
          </Routes>
        </div>
      </Content>
    </Router>
  );
}

export default App;
