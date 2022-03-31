import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../buttons/ButtonIcon';


const NotificationBtn = () => {

  // Handeling Notification Button
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationsBtn = (e) => {
    e.preventDefault();
    setShowNotifications(!showNotifications)
  };

  // Notifications Array
  const notifications = [
    {
      type: { icon: 'description', bg: 'bg-primary' },
      date: 'December 12, 2019',
      notification: 'A new monthly report is ready to download!'
    },
    {
      type: { icon: 'paid', bg: 'bg-secondary' },
      date: 'December 7, 2019',
      notification: '$290.29 has been deposited into your account!'
    },
    {
      type: { icon: 'warning', bg: 'bg-warning' },
      date: 'December 2, 2019',
      notification: `Spending Alert: We've noticed unusually high spending for your account.`
    }
  ];

  let lenght = notifications.length;

  return (
    <div className='notifications-icon-wrapper'>

      <ButtonIcon
        className='notifications-btn'
        iconName='notifications'
        onClick={handleNotificationsBtn}
        classNameIcon='c-grey md-24'
      />
      <span className="badge badge-counter badge-danger">{lenght}+</span>

      {/* Dropdown - Notifications */}
      {
        showNotifications && (
          <div className="dropdown-notifications">

            <h6 className="dropdown-header">ALERTS CENTER</h6>

            {
              notifications.map(({ type, date, notification }) => {
                return (
                  <NavLink className="container-flex-row dropdown-item" to={'/home'}>
                    <div className="wrapper-circle-icon">
                      <div className={`icon-circle ${type.bg}`}>
                        <span className="material-icons md-18">{type.icon}</span>
                      </div>
                    </div>
                    <div className="wrapper-body-icon">
                      <div className="notification-box-date">{date}</div>
                      <span className="notification-box-text">{notification}</span>
                    </div>
                  </NavLink>
                )
              })
            }

            <NavLink className="container-flex-row dropdown-item" to={'/admin/notifications'}>
              <p className="notification-box-date">Show all alerts</p>
            </NavLink>

          </div>
        )
      }

    </div>
  )
};

export default NotificationBtn;
