import React, { useState, useEffect } from 'react';
import './ChatWindow.css';
import { Menu, Tooltip } from 'antd';
import {
  UserOutlined, VideoCameraOutlined, PhoneOutlined, EllipsisOutlined, SmileOutlined, SendOutlined, PaperClipOutlined,
  CameraOutlined, FileTextOutlined, EnvironmentOutlined, DollarCircleOutlined, AudioOutlined, PictureOutlined, ContactsOutlined
} from '@ant-design/icons';
import EmojiPicker from 'emoji-picker-react';

const ChatWindow = ({ selectedContact, initialData, setInitialData }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCamera, setShowCamera] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    if (selectedContact) {
      const contactId = selectedContact.id;
      setMessages(initialData[contactId] || []);
    }
  }, [selectedContact, initialData]);

  const updateData = (newMessage) => {
    if (!selectedContact || !selectedContact.id) ;

    const updatedData = { ...initialData };
    const contactId = selectedContact.id;
    if (!(contactId in updatedData)) {
      updatedData[contactId] = [];
    }

    updatedData[contactId].push(newMessage);
    setInitialData(updatedData);
    setMessages(updatedData[contactId]);
    setInputText('');
    console.log("updatedData", updatedData);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMessage = {
      text: inputText,  
      sender: 'self',
      timestamp: new Date().toLocaleTimeString(),
    };
    updateData(newMessage);
    console.log("........................", newMessage);
    setInputText('');
    setIsTyping(false);
    setShowCamera(true);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputText(inputText + emojiObject.emoji);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setIsTyping(!!text.trim());
    setShowCamera(!text.trim());
  };

  return (
    <div className="chat-window">
      <div className="header">
        <div className="profile-image">
          <UserOutlined />
        </div>
        <h2>{selectedContact ? selectedContact.name : ''}</h2>
        <div className="icons">
          <VideoCameraOutlined />
          <PhoneOutlined />
          <Tooltip
            title={
              <Menu>
                <Menu.Item key="1">View Contact</Menu.Item>
                <Menu.Item key="2">Media</Menu.Item>
                <Menu.Item key="3">Link and Docs</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="4">Search</Menu.Item>
                <Menu.Item key="5">Mute Notification</Menu.Item>
                <Menu.Item key="6">Disappearing Messages</Menu.Item>
                <Menu.Item key="7">Wallpaper</Menu.Item>
                <Menu.Item key="8">More</Menu.Item>
              </Menu>
            }
            placement="bottomRight"
            trigger="click"
          >
            <EllipsisOutlined />
          </Tooltip>
        </div>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'self' ? 'sent' : 'received'}`}>
            <p className="text">{message.text}</p>
            <p className="timestamp">{message.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="input-box">
        <div className="input-icons">
          <SmileOutlined className="smile-icon" onClick={toggleEmojiPicker} />
          {showEmojiPicker && <EmojiPicker onEmojiClick={(emojiObject) => handleEmojiClick(emojiObject)} />}

          <Tooltip
            title={
              <Menu>
                <Menu.Item key="contacts">
                  <ContactsOutlined /> Contacts
                </Menu.Item>
                <Menu.Item key="file">
                  <FileTextOutlined /> File
                </Menu.Item>
                <Menu.Item key="location">
                  <EnvironmentOutlined /> Location
                </Menu.Item>
                <Menu.Item key="payment">
                  <DollarCircleOutlined /> Payment
                </Menu.Item>
                <Menu.Item key="audio">
                  <AudioOutlined /> Audio
                </Menu.Item>
                <Menu.Item key="picture">
                  <PictureOutlined /> Picture
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
            trigger="click"
          >
            <PaperClipOutlined className="tooltips-icons" />
          </Tooltip>
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        {isTyping && <button onClick={sendMessage}><SendOutlined /></button>}
        {!isTyping && <button onClick={sendMessage}><AudioOutlined /></button>}
        {showCamera && !isTyping && <CameraOutlined className="Camera" />}
      </div>
    </div>
  );
};


export default ChatWindow;


