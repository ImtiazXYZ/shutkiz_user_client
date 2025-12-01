"use client"
import React, { useEffect, useState } from 'react';
import profileUpdate from '../../_lib/profile/profileUpdate';
import getPersonalInfo from '../../_lib/profile/getPersonalInfo';
import { Skeleton } from 'antd';
import toast from 'react-hot-toast';

function PersonalInfo() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading]= useState(true);
    
    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      const result = await getPersonalInfo();
      if (result?.data) {
        setName(result.data.user.name || '');
        setMobile(result.data.user.mobile || '');
      }
      setIsLoading(false);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await profileUpdate(name, mobile, password);
      if(result){
          setPassword("");
          toast.success('Profile Updated');
      }
    };
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Update Personal Information
        </h2>

        <div>
            {
                isLoading?<div className='p-5'><Skeleton paragraph={{ rows: 6 }} active/></div>:
                <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:black sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          {/* Mobile Field */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:black sm:text-sm"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:black sm:text-sm"
              placeholder="Enter a new password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md"
            >
              Update Profile
            </button>
          </div>
        </form>
            }
        </div>
      </div>
    </main>
  )
}

export default PersonalInfo
