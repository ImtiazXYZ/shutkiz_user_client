"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserImage from "../../../public/user.png"
import getPersonalInfo from "../../_lib/profile/getPersonalInfo";
const UserProfile = async () => {
  const resule = await getPersonalInfo();
  const user = resule.data.user;
  return (
    <main className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Image
              src={UserImage} // Replace with dynamic profile image source
              alt="Profile Picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 text-sm pt-1">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-[15px]">
              <p className="text-gray-700">Total Orders: {resule.data.total_order}</p>
              <p className="text-gray-700">Pending Orders: {resule.data.pending_order}</p>
              <p className="text-gray-700">Completed Orders: {resule.data.completed_order}</p>
            </div>
            <Link href="/profile/orders">
              <p className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
                View All Orders
              </p>
            </Link>
          </div>

          {/* Profile Update Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
            <p className="text-gray-700 text-[15px]">Update your personal information, such as name, email, and password.</p>
            <Link href="/profile/personal-info">
              <p className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
                Update Profile
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
