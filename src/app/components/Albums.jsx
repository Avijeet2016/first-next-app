import React, { use } from 'react';

const Albums = ({albumsPromise}) => {
    const albums = use(albumsPromise);
    console.log(albums);
    return (
        <div>
            <h2>Albums Length: {albums.length}</h2>
        </div>
    );
};

export default Albums;