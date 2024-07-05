import  { useState } from 'react';

const Navbar = () => {
  const [adminDropdown, setAdminDropdown] = useState(false);
  const [employeeDropdown, setEmployeeDropdown] = useState(false);

  const toggleAdminDropdown = () => {
    setAdminDropdown(!adminDropdown);
    setEmployeeDropdown(false);
  };

  const toggleEmployeeDropdown = () => {
    setEmployeeDropdown(!employeeDropdown);
    setAdminDropdown(false); 
  };

  return (
    <div className='bg-[#213547] h-20'>
      <div className='flex items-center h-full justify-between mx-36'>
        <div className='text-white text-3xl'>
          NEPL
        </div>
        <div className='text-white flex gap-10'>
          <div className='relative'>
            <p onClick={toggleAdminDropdown} className='cursor-pointer text-xl'>Admin</p>
            {adminDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2'>
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>First Admin Details</a>
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Name</a>
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Contact</a>
              </div>
            )}
          </div>
          <div className='relative'>
            <p onClick={toggleEmployeeDropdown} className='cursor-pointer text-xl'>Employee</p>
            {employeeDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2'>
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Employee Name</a>
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Address</a>
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Number</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;