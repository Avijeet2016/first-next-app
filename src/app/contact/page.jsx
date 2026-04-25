'use client';
import React, { useState } from 'react';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const ContactPage = () => {
    const [count, setCount] = useState(0);
    console.log('count:', count);
    return (
      <div className={roboto.className}>
        <h2>Contact Page</h2>
        <h3>Counter: {count}</h3><br />
        
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button>
      </div>
    );
};

export default ContactPage;