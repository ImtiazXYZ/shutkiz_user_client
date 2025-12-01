"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import getSearchResult from "../../_lib/search/getSearchResult";
import SearchProducts from "../Search/SearchProducts";
import { Skeleton } from 'antd';

function SearchResult() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get('keyword');
    const [result, setResult] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchSearchResult = async (page) => {
        if (!keyword) return;

        setLoading(true);
        try {
            const searchResult = await getSearchResult(keyword, page);
            setResult(searchResult);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSearchResult(currentPage);
    }, [keyword, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchSearchResult(page);
    };

    useEffect(() => {
        if (keyword) {
            fetchSearchResult(currentPage);
        }
    }, [keyword]);

    if (loading) return (
        <div className='w-full p-10'>
                    <Skeleton active paragraph={{rows:4}}/>
                </div>
    );

    return (
        <div>
            {result ? (
                
                <SearchProducts
                    searchResult={result}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    keyword={keyword}
                />
            ) : (
                <div className='w-full p-10'>
                    No products found for {keyword}
                </div>
            )}
        </div>
    );
}

export default SearchResult;
