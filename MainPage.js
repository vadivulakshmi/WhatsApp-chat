import React from 'react';
import { Avatar, Space, Tooltip } from 'antd';
import { UserOutlined, PhoneOutlined, VideoCameraOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = ({ id, profilePic }) => {
  return (
    <div className="main-page">
      <Link to={`/profile/${id}`}>
        <div className="profile-section">
          <Avatar src={profilePic} size={64} icon={<UserOutlined />} />
          <h2>{id}</h2>
        </div>
      </Link>
      <div className="action-icons">
        <Space>
          <Tooltip title="Video Call">
            <VideoCameraOutlined />
          </Tooltip>
          <Tooltip title="Voice Call">
            <PhoneOutlined />
          </Tooltip>
          <Tooltip title="Options">
            <EllipsisOutlined />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
}

export default MainPage;
