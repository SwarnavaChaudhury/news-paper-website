import React, { useContext } from 'react'
import { NewsContext } from '../MainLayout'
import NewsCard from './component/NewsCard'
import LoadingCompo from './component/LoadingCompo'
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";



export default function Home() {

    // let { searchNews, setSearchNews, newsArr, totalRes } = useContext(NewsContext)
    let { searchNews, setSearchNews, setPresentLanguage, newsArr, totalRes, newsDtls, nextPageToken, prevPages, setPrevPages } = useContext(NewsContext)


    return (
        <>

            <div className='container mx-auto lg:px-0 px-1'>

                <h1 className='py-5 text-4xl font-bold text-center'>
                    Stay Update with NewsPortal!
                </h1>

                <div className='w-full flex justify-center'>
                    <ul className='flex justify-center items-center flex-wrap gap-5 pb-5'>
                        <li
                            className='bg-red-400 text-white px-10 py-2 rounded-md cursor-pointer'
                            onClick={() => setSearchNews('sports')}
                        >
                            <span>
                                Sports
                            </span>
                        </li>
                        <li
                            className='bg-red-400 text-white px-10 py-2 rounded-md cursor-pointer'
                            onClick={() => setSearchNews('politics')}
                        >
                            <span>
                                Politics
                            </span>
                        </li>
                        <li
                            className='bg-red-400 text-white px-10 py-2 rounded-md cursor-pointer'
                            onClick={() => setSearchNews('health')}
                        >
                            <span>
                                Health
                            </span>
                        </li>
                        <li
                            className='bg-red-400 text-white px-10 py-2 rounded-md cursor-pointer'
                            onClick={() => setSearchNews('entertainment')}
                        >
                            <span>
                                Entertainment
                            </span>
                        </li>
                        <li
                            className='bg-red-400 text-white px-10 py-2 rounded-md cursor-pointer'
                            onClick={() => setSearchNews('technology')}
                        >
                            <span>
                                Technology
                            </span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='container mx-auto lg:px-0 px-5 mt-10 flex flex-wrap justify-start items-start'>


                {
                    newsArr.length > 0
                        ?
                        newsArr.map((item, index) => {
                            return (
                                <div className='basis-[23%] m-[1%]' key={index}>

                                    <NewsCard newsdtls={item} />

                                </div>
                            )
                        })
                        :
                        <LoadingCompo />
                }


            </div>

            <div className='w-full flex justify-center gap-5 my-10'>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 flex gap-3 justify-center items-center"
                    onClick={() => {
                        const prev = [...prevPages];
                        const lastPage = prev.pop();
                        setPrevPages(prev);
                        newsDtls(lastPage || null);
                    }}
                    disabled={prevPages.length === 0}
                >
                    <MdOutlineKeyboardDoubleArrowLeft />
                    Previous
                </button>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 flex gap-3 justify-center items-center"
                    onClick={() => {
                        setPrevPages(prev => [...prev, nextPageToken]);
                        newsDtls(nextPageToken);
                    }}
                    disabled={!nextPageToken}
                >
                    Next
                    <FaAnglesRight />
                </button>

            </div>


        </>
    )
}