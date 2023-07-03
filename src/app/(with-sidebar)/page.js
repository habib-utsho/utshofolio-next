import React from 'react';

const page = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className='text-white text-center space-y-5'>
                <h2 className='my-title my-clr-one'>Ahashan Habib Utsho</h2>
                <h3> Full stack web developer </h3>
                <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.</p>
                <button className='my-btn-one'>Download resume</button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-red-300 to-red-500 mt-10 text-center w-full'>
                <div className='p-7'>
                    <div className='p-5 space-y-3 md:border-r'>
                        <h2 className='my-title'>1.5+</h2>
                        <p>years of experience</p>
                    </div>
                </div>
                <div className='p-7'>
                    <div className='p-5 space-y-3 md:border-r'>
                        <h2 className='my-title'>50+</h2>
                        <p>projects completed</p>
                    </div>
                </div>
                <div className='p-7'>
                    <div className='p-5 space-y-3 md:border-r'>
                        <h2 className='my-title'>50+</h2>
                        <p>project completed</p>
                    </div>
                </div>
                <div className='p-7'>
                    <div className='p-5 space-y-3'>
                        <h2 className='my-title'>20+</h2>
                        <p>open source project!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;