import React, { createContext, useEffect, useState } from 'react'
import Header from './pages/common/Header'
import { Outlet } from 'react-router'
import Footer from './pages/common/Footer'
import axios from 'axios';

export let NewsContext = createContext();
export let API_KEY = 'pub_48bab4dd73d4466aa57e00c124895045';

export default function MainLayout() {

    let [searchNews, setSearchNews] = useState('india');
    let [newsArr, setNewsArr] = useState([])
    let [totalRes, setTotalRes] = useState(null)
    let [currentPage, setCurrentPage] = useState(1);
    let [numberOfNews, setNumberOfNews] = useState(10);
    let [presentLanguage, setPresentLanguage] = useState('en');

    let [nextPageToken, setNextPageToken] = useState(null);
    let [prevPages, setPrevPages] = useState([]); // stack for previous pages


    let newsDtls = (pageToken = null) => {

        axios.get(`https://newsdata.io/api/1/latest`, {
            params: {
                apikey: API_KEY,
                q: searchNews,
                size: numberOfNews,
                language: presentLanguage,
                page: pageToken || undefined
            }
        })
            .then((res) => {
                console.log(res.data)
                // console.log(res.data.results);
                setNewsArr(res.data.results || []);
                setTotalRes(res.data.totalResults || 0);

                // Save next page token
                if (res.data.nextPage) {
                    setNextPageToken(res.data.nextPage);
                }

            })
            .catch((res_err) => {
                console.log(res_err);
            })

    }


    let newsObj = {
        searchNews,
        setSearchNews,
        setPresentLanguage,
        newsArr,
        totalRes,
        newsDtls,
        nextPageToken,
        prevPages,
        setPrevPages
    }


    useEffect(() => {
        newsDtls();
    }, [searchNews, presentLanguage, numberOfNews])


    return (
        <NewsContext.Provider value={newsObj}>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </NewsContext.Provider>
    )
}