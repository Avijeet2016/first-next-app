import Image from 'next/image';
import React from 'react';
import binaryImg from '../../assets/images/binary.png';

const AboutPage = () => {
    return (
      <div>
        <h2>About Page</h2>
        {/* https://i.ibb.co.com/fYF1d5xx/duplesis.webp */}
        <Image src="https://i.ibb.co.com/fYF1d5xx/duplesis.webp" alt='rsa' width={300} height={300}></Image>

        {/* https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a */}
        <Image
          src="https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a"
          alt="unsplash"
          width={300}
          height={300}
        ></Image>
        <Image
          src="/vscode.png"
          alt="vs code image"
          width={300}
          height={300}
        ></Image>
        <h2 className="font-bold text-4xl">Binary Image</h2>
        <Image
          src={binaryImg}
          alt="binary img"
          width={400}
          height={300}
        ></Image>
      </div>
    );
};

export default AboutPage;