import React from 'react';
import FoodPage from '../components/Food/page';

const FoodsPage = async () => {
    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/foods",
    );
    const data = await res.json();
    const foods = data.data;
    return (
        <div>
            <h2>Foods Page</h2>
            <div className='grid grid-cols-3 gap-10 max-w-7xl mx-auto'>
                {
                    foods.map(food => <FoodPage key={food.id} food={food}></FoodPage>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;