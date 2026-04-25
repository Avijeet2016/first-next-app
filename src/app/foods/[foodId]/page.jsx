import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodDetailPage = async ({params}) => {
    const {foodId} = await params;
    const res = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
    );
    const data = await res.json();
    const food = data.data;
    const {id, dish_name, category, image_link, approximate_nutrition_per_serving } = food;

    return (
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={image_link}
            alt="dish_name"
            width={300}
            height={300}
            className="h-50 w-full object-contain"
          ></Image>
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title flex items-center justify-center">
            {dish_name}
          </h2>
          <p>{category}</p>
        </div>
        <div> 
          {Object.entries(approximate_nutrition_per_serving).map(
            ([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ),
          )}
        </div>
      </div>
    );
};

export default FoodDetailPage;