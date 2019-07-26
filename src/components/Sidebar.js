import React from 'react';
import './css/Sidebar.css';
import User from './User';

const Sidebar = ({ contacts }) => {
    return <aside className="sidebar">
        {
            contacts.map( contact => (
                <User key={ contact.user_id } user={ contact } />
            ) )
        }
    </aside>
}

export default Sidebar;