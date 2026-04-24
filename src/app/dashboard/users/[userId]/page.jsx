import React from 'react';

const UserDetailPage = async ({params}) => {
    const {userId} = await params;
    
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await res.json();
    console.log('user', user);
    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <h4>{user.website}</h4>
        </div>
    );
};

export default UserDetailPage;