import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import MenuItem from 'antd/lib/menu/MenuItem';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            {/* <Button className='manu-control-container'>

            </Button> */}
        </div>
        <Menu>
            <MenuItem icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </MenuItem>
            <MenuItem icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </MenuItem>
            <MenuItem icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </MenuItem>
        </Menu>

    </div>
  )
}

export default Navbar