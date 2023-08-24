'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSubmitFunc = form => {
        const {name, email, message} = form
        toast.success('Thank your for contact with me!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    // console.log(watch("name")) //get name outside onSubmit form

    return (
        <div className='p-6 text-white'>
            <h2 className='my-subtitle relative pl-3 my-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>Contact with me</h2>
            <h2 className='my-title my-clr-one'>Let{"'"}s craft something innovative together!</h2>

            {/* contact info three box */}
            <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div className='space-y-4 text-center p-5 py-10 rounded border border-[#081229] bg-[#E84545]  transition duration-500'>
                    <FaSearchLocation className='mx-auto text-2xl'></FaSearchLocation>
                    <p>Badda, Dhaka</p>
                </div>
                <div className='space-y-4 text-center p-5 py-10 rounded border border-[#081229] bg-[#E84545]  transition duration-500'>
                    <FaPhone className='mx-auto text-2xl'></FaPhone>
                    <p>+880170678-5160</p>
                </div>
                <div className='space-y-4 text-center p-5 py-10 rounded border border-[#081229] bg-[#E84545]  transition duration-500'>
                    <FaMailBulk className='mx-auto text-2xl'></FaMailBulk>
                    <p>utsho926@gmail.com</p>
                </div>
            </div>

            {/* contact form */}
            <form onSubmit={handleSubmit(handleSubmitFunc)} className='space-y-4 my-6'>
                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold' htmlFor="name">Name</label>
                    <input type="text" id='name' className='my-inp' {...register("name", { required: true })} placeholder='Name' />
                    {errors.name && <span className='text-red-500'>This field is required</span>}
                </div>

                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold' htmlFor="email">Email</label>
                    <input type="email" id='email' className='my-inp' {...register("email", { required: true })} placeholder='Your email' />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </div>

                <div className='space-y-2'>
                    <label className='text-slate-300 font-semibold' htmlFor="message">Message</label>
                    <textarea type="text" id='message' className='my-inp w-full h-[200px]' {...register("message", { required: true })} placeholder='Your message' />
                    {errors.message && <span className='text-red-500'>*This field is required</span>}
                </div>
                <button type='submit' className='my-btn-one'>Send</button>
            </form>

            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default ContactPage;