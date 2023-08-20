import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import utsho from '/public/assets/img/utsho.jpg'


const Hoempage = () => {
    return (
        <div className='min-h-screen py-8 md:py-2 pb-16 md:pb-2 px-6 md:px-2 flex flex-col items-center justify-center'>
        <div className='text-white text-center space-y-5'>
            <Image src={utsho} alt='Ahashan Habib Utsho' height={300} width={300} className='mx-auto border-2 border-green-500 rounded-xl hover:scale-105 transition duration-500'></Image>
            <h2 className='my-title my-clr-one'>Ahashan Habib Utsho</h2>
            <h3> Full stack web developer </h3>
            <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.</p>
            <button className='my-btn-one'>Download resume <FaDownload></FaDownload></button>
        </div>


        <div className='grid grid-cols-2 md:grid-cols-4 bg-gradient-to-tr from-red-500 to-blue-500 mt-10 text-center w-full rounded'>
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

export default Hoempage;