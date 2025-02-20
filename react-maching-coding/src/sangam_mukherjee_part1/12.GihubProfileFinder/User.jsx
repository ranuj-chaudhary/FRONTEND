import React from 'react';

const User = ({ userData }) => {
  const { avatar_url, created_at, login, name, user_view_type } = userData;

  const date = new Date(created_at);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const year = date.getFullYear();

  console.log(day, month, year);

  return (
    <div className="user flex flex-col items-center p-4 border-2 ">
      <div className="user__profile-image">
        <img src={avatar_url} alt="" className="w-48 h-48 rounded-full" />
      </div>
      <div className="user__personal-details">
        <p>
          Name:
          <span className="uppercase">
            {login?.replace(/-/g, ' ') || name?.replace(/-/g, ' ')}
          </span>
        </p>
        <p>User View Type: {user_view_type}</p>
        <p>CreatedAt: {`${day}/${month}/${year}`}</p>
      </div>
    </div>
  );
};

export default User;
