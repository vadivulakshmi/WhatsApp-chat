import React from 'react';
import './ContactList.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ContactList = ({ setSelectedContact, contacts }) => {
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.sort((a, b) => a.name.localeCompare(b.name)).map((contact) => (
        <div key={contact.id} onClick={() => handleContactClick(contact)} className="contact-item">
          <div className="profile-icon">
            <Avatar src={contact.profilePic} size={64} icon={<UserOutlined />} />
          </div>
          <div className="contact-details">
            <span>{contact.name}</span>
            <span className="last-seen">{contact.lastSeen}</span>
          </div>
        </div>
      ))}
    </div>
  );  
};

export default ContactList;