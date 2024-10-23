import React from 'react';
import comingSoon from '/public/assets/img/coming-soon.jpg'

const page = () => {
    return (
        <div className='min-h-screen md:h-full bg-cover bg-center relative md:animate-pulse' style={{ backgroundImage: `url(${comingSoon.src})` }}>
            <span className='absolute left-2 top-2 py-2 px-6 rounded bg-opacity-10 bg-slate-50 text-slate-300 font-bold animate-pulse'>Article</span>

        </div>
    );
};

export default page;