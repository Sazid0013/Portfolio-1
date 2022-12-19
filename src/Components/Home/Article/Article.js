import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <article className='py-5 m-0 articleBody'>
            <div className="container d-flex flex-column  align-items-center">
                <h2 className='titleMini text-center'>WHY CHOSE ME?</h2>
                <h3 className='titleResult text-center'>PUSH YOURSELF FORWARD</h3>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-3  g-5'>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 rounded-circle'>
                                <i className="fa-solid fa-bicycle color"></i></h1>
                        </div>
                        <h4 className='flexTitle text-center'>Modern Equipment</h4>
                        <p className='text-center flexParagraph'>I can assist you in selecting the greatest vintage and contemporary equipment for your needs.</p>
                    </div>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 px-4 rounded-circle'>
                                <i className="fa-solid fa-utensils  color"></i></h1>
                        </div>
                        <h4 className='flexTitle text-center'>Health & Nutrition plan</h4>
                        <p className='text-center flexParagraph'>I am a certified dietitian. I'll provide you the ideal food plan to help you reach your goal. </p>
                    </div>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 rounded-circle'>
                                <i className="fa-solid fa-dumbbell color"></i></h1>
                        </div>
                        <h5 className='flexTitle text-center'>In Gym  Training</h5>
                        <p className='text-center flexParagraph'>I'll design the optimal training plan for you based on your particular body shape and desired outcome..</p>
                    </div>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 rounded-circle'>
                                <i className="fa-solid fa-person-rays color"></i></h1>
                        </div>
                        <h4 className='flexTitle text-center'>Unique Training</h4>
                        <p className='text-center flexParagraph'>I will always give individual counsel to my clients depending on their requirements, whether it is through online or one-on-one training. </p>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default Article;