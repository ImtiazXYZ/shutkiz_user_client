"use client";
import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
function SearchBox() {
    const [query,setQuery] = useState();
    const router = useRouter();
    const t = useTranslations("Navigation");
    const handleSearch=(e)=>{
        e.preventDefault();
        router.push(`/search?keyword=${encodeURIComponent(query)}`);
    }
  return (
    <main>
      <div className="md:flex md:items-center">
        <div className="relative">
        <form onSubmit={handleSearch}>
        <input
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder={t("search")}
            className="rounded-full pl-4 pr-12 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black  w-full md:w-[400px] md:h-[40px]  hover:border-black transition-all duration-300 ease-in-out"
        />
        <button type='submit' className="absolute right-0 top-0 h-full px-4  flex items-center justify-center">
        <GoSearch />
        </button>
        </form>
        </div>
    </div>
    </main>
  )
}

export default SearchBox
