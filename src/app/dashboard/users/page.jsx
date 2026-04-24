import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    
    return (
      <div className='grid grid-cols-3 gap-5'>
        {users.map((user) => (
          <div key={user.id} className="card card-dash bg-base-100 w-96">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link href={`/dashboard/users/${user.id}`}>Buy Now</Link></button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default UsersPage;