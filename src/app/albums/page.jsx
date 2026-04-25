import React, { Suspense } from 'react';
import Albums from '../components/Albums';

const AlbumsPage = () => {
    const albumsPromise = fetch("https://jsonplaceholder.typicode.com/albums").then(res => res.json());
    console.log(albumsPromise);

    return (
      <div>
        <h2>Albums Page</h2>
        <Suspense fallback={<h2>Albums data are fetching...</h2>}>
          <Albums albumsPromise={albumsPromise}></Albums>
        </Suspense>
      </div>
    );
};

export default AlbumsPage;