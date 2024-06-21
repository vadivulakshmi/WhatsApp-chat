import React, { useState } from 'react';
import { Layout, Menu, Input, Tooltip } from 'antd';
import { CameraOutlined, SearchOutlined, EllipsisOutlined } from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchVisibility = () => {
        setIsSearchVisible(!isSearchVisible);
    };
    
    return (
        <Header className="navbar">
            <div className="logo">WhatsApp</div>
            <Menu theme="" mode="horizontal" menu={['1']} className="menu">
                <Menu.Item key="1" icon={<CameraOutlined />} className="menu-item" />
                <Menu.Item key="2" className="menu-item">
                    {isSearchVisible ? (
                        <Input
                             prefix={<SearchOutlined />}
                            placeholder="Search..."
                            onOk={toggleSearchVisibility}
                            
                        />
                    ) : (
                        <SearchOutlined onClick={toggleSearchVisibility} />
                    )}
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                    <Tooltip
                        title={
                            <Menu>
                                <Menu.Item key="new-group">New Group</Menu.Item>
                                <Menu.Item key="new-broadcast">New Broadcast</Menu.Item>
                                <Menu.Item key="linked-device">Linked Device</Menu.Item>
                                <Menu.Item key="starred-messages">Starred Messages</Menu.Item>
                                <Menu.Item key="payments">Payments</Menu.Item>
                                <Menu.Item key="settings">Settings</Menu.Item>
                            </Menu>
                        }
                        placement="bottomRight"
                        trigger="click"
                    >
                        <EllipsisOutlined />
                    </Tooltip>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navbar;
