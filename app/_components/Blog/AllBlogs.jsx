"use client";
import { Pagination as AntPagination, Empty } from "antd";
import CardOne from "../../_components/Common/CardOne";

function AllBlogs({ blogs, currentPage, onPageChange }) {
  const { last_page: totalPages, data: blogData, total } = blogs;

  return (
    <main>
      {blogData.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 gap-y-10">
            {blogData &&
              blogData.map((blog, index) => (
                <CardOne
                  key={index}
                  img={blog.thumbnail}
                  name={blog.title}
                  detailsUrl={`/blog/${blog.slug}`}
                />
              ))}
          </div>
          {blogData.length > 0 && totalPages > 1 && (
            <div className="pt-14">
              <AntPagination
                current={currentPage}
                total={total}
                pageSize={6} // Adjust according to your backend pagination logic
                onChange={onPageChange}
                align="center"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="w-full">
          <Empty />
        </div>
      )}
    </main>
  );
}

export default AllBlogs;
