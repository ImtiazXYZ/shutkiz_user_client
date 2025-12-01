"use client";
import { useState } from "react";
import AllBlogs from "../../_components/Blog/AllBlogs";
import LeftMenu from "../../_components/Recipe/LeftMenu"; // Keep it separate
import getFilteredBlogs from "../../_lib/blog/getFilteredBlogs";
import { Skeleton } from "antd";
import { useRouter } from 'next/navigation';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


function BlogFilters({ initialBlogs, categories }) {
  const router = useRouter();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (categoryIds, page) => {
    setLoading(true);
    const categoryIdsString = categoryIds.join(",") || "";
    const filteredData = await getFilteredBlogs(categoryIdsString, page);
    setBlogs(filteredData);
    setLoading(false);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
      fetchBlogs(updated, 1); // Reset to the first page
      setCurrentPage(1);
      return updated;
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchBlogs(selectedCategories, page);
    router.push(`?page=${page}`);
  };

  return (
    <div>
      
        <div className="md:flex md:gap-x-5 md:pt-5 pb-10">
          <LeftMenu 
            categories={categories} 
            handleCategoryClick={handleCategoryClick} 
            selectedCategories={selectedCategories} 
          />
          {
            loading?<Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />:
            <div className="w-full">
                <AllBlogs 
            blogs={blogs} 
            currentPage={currentPage} 
            onPageChange={handlePageChange} 
          />
            </div>
          }
        </div>
      
    </div>
  );
}

export default BlogFilters;
