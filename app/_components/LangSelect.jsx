'use client'; // Ensure the component is a client-side component

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IoLanguageSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const availableLocales = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'বাংলা' }
  ]; // Define available locales

  // Extract the current locale from the pathname (e.g., '/en/some-page')
  const currentLocale = pathname.split('/')[1] || 'en'; // Default to 'en' if no locale is present

  const [selectedLocale, setSelectedLocale] = useState(currentLocale);
  const [showSelect, setShowSelect] = useState(false); // State to toggle select box visibility

  // Function to handle the language change
  const changeLanguage = (newLocale) => {
    const newPathname = `/${newLocale}${pathname.substring(currentLocale.length + 1)}`;
    router.push(newPathname);
  };

  // Handle the select box change
  const handleSelectChange = (e) => {
    const newLocale = e.target.value;
    setSelectedLocale(newLocale);
    changeLanguage(newLocale);
    setShowSelect(false); // Hide select box after selection
  };

  useEffect(() => {
    setSelectedLocale(currentLocale); // Update the selected locale on route changes
  }, [currentLocale]);

  // Toggle the visibility of the select box
  const toggleSelectVisibility = () => {
    setShowSelect(!showSelect);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', paddingLeft: '10px' }}>
      {/* Globe Icon */}
      <CiGlobe
        onClick={toggleSelectVisibility}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          color: 'black',
        }}
      />

      {/* Show select box only when showSelect is true */}
      {showSelect && (
        <select
          value={selectedLocale}
          onChange={handleSelectChange}
          style={{
            position: 'absolute',
            top: '30px', // Adjust position below the globe icon
            right: 0,
            padding: '5px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            backgroundColor: 'white', // Ensure it's visible
          }}
        >
          {availableLocales.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
