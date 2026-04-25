import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodPage = ({food}) => {
    const {id, dish_name, category, image_link } = food;
    return (
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image src={image_link} alt='dish_name' width={300} height={300}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {dish_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Add to Cart</div>
            <div className="badge badge-outline">
              <Link href={`/foods/${id}`}>Show Details</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodPage;