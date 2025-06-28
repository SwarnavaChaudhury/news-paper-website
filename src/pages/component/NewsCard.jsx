import React from 'react'

export default function NewsCard({ newsdtls }) {

    let { author, description, pubDate, title, link, image_url } = newsdtls


    return (
        <div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href={link} target='_blank'>

                    {
                        image_url
                            ?
                            <img className="rounded-t-lg h-[200px] w-full" src={image_url} alt="" />
                            :
                            <img className="rounded-t-lg h-[200px] w-full" src='/imgs/newspaper-placeholder.jpg' alt="" />
                    }
                </a>
                <div className="p-5">
                    <a href={link} target='_blank'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {/* Noteworthy technology acquisitions 2021 */}
                            {title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {
                            typeof description == 'string'
                                ?
                                description.substring(0, 100)
                                :
                                description
                        }
                        ...
                    </p>
                    <p className='mb-1'>
                        {
                            author
                                ?
                                <span className='bg-gray-300 text-white px-2 pb-1 rounded-lg'>
                                    {author}
                                </span>
                                :
                                ""
                        }
                    </p>
                    <p className='mb-3'>
                        <span className='text-gray-500 text-[14px]'>
                            {/* {pubDate} */}
                            {
                                convertISOStringToDateTime(pubDate)
                            }
                        </span>
                    </p>
                    <a href={link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read News
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}




function convertISOStringToDateTime(isoString) {
    const date = new Date(isoString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}