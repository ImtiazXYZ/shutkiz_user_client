"use client";
import React from 'react';
import CardOne from "../../_components/Common/CardOne";
import { Pagination as AntPagination, Empty } from 'antd';

function AllRecipes({ recipes, currentPage, onPageChange }) {
    const { last_page: totalPages, data: recipeData, total } = recipes;

    return (
        <main>
            {
              recipeData.length>0?
              <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 gap-y-10'>
                {recipeData && recipeData.map((recipe, index) => (
                    <CardOne key={index} img={recipe.thumbnail} name={recipe.title} detailsUrl={`/recipe/${recipe.id}`} />
                ))}
            </div>
            {recipeData.length > 0 && totalPages > 1 && (
                <div className='pt-14'>
                  <AntPagination 
                    current={currentPage} 
                    total={total} 
                    pageSize={6} // Adjust according to your backend pagination logic
                    onChange={onPageChange} 
                    align="center"
                  />
                </div>
            )}
              </div>:
              <div className='w-full'>
                <Empty/>
              </div>
            }
        </main>
    );
}

export default AllRecipes;
