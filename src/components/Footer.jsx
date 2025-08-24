import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-gradient-to-r from-green-800 to-green-900 text-white mt-auto'>
                <div className='container mx-auto px-4 py-8'>
                    {/* Main Footer Content */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
                        {/* Brand Section */}
                        <div className='flex flex-col items-center md:items-start'>
                            <div className='mb-4'>
                                <span className='font-bold text-2xl'>Pass<span className='text-green-400'>Manage--</span></span>
                                <p className='text-green-200 text-sm mt-2'>Secure Password Management</p>
                            </div>
                            <p className='text-gray-300 text-sm text-center md:text-left leading-relaxed'>
                                Keep your passwords safe and organized with our secure, easy-to-use password manager.
                            </p>
                        </div>

                        {/* Features Section */}
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='font-semibold text-lg mb-4 text-green-400'>Features</h3>
                            <ul className='space-y-2 text-sm text-gray-300'>
                                <li className='flex items-center gap-2'>
                                    <span className='text-green-400'>✓</span>
                                    Secure password storage
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-green-400'>✓</span>
                                    One-click copy functionality
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-green-400'>✓</span>
                                    Easy edit and delete
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-green-400'>✓</span>
                                    Responsive design
                                </li>
                            </ul>
                        </div>

                        {/* Security Info */}
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='font-semibold text-lg mb-4 text-green-400'>Security</h3>
                            <div className='text-sm text-gray-300 space-y-2'>
                                <p className='flex items-center gap-2'>
                                    <span className='text-green-400'>🔒</span>
                                    Local storage only
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span className='text-green-400'>🛡️</span>
                                    No data transmission
                                </p>
                                <p className='flex items-center gap-2'>
                                    <span className='text-green-400'>🔐</span>
                                    Client-side encryption
                                </p>
                                <div className='mt-4 p-3 bg-green-800 rounded-lg'>
                                    <p className='text-xs text-green-200'>
                                        <strong>Note:</strong> Your passwords are stored locally in your browser and never sent to any server.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className='border-t border-green-700 my-6'></div>

                    {/* Bottom Footer */}
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <div className='text-center md:text-left'>
                            <p className='text-sm text-gray-300'>
                                Created with ❤️ by <span className='text-green-400 font-semibold'>Danish</span>
                            </p>
                            <p className='text-xs text-gray-400 mt-1'>
                                Built with React & Tailwind CSS
                            </p>
                        </div>
                        
                        <div className='text-center md:text-right'>
                            <p className='text-sm text-gray-300'>
                                © 2025 PassManage. All rights reserved.
                            </p>
                            <p className='text-xs text-gray-400 mt-1'>
                                Thank you for using our application!
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack Badge */}
                    <div className='flex justify-center mt-6'>
                        <div className='bg-green-700 px-4 py-2 rounded-full'>
                            <div className='flex items-center gap-3 text-xs text-green-200'>
                                <span className='flex items-center gap-1'>
                                    <span className='w-2 h-2 bg-blue-400 rounded-full'></span>
                                    React
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span className='w-2 h-2 bg-cyan-400 rounded-full'></span>
                                    Tailwind
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span className='w-2 h-2 bg-orange-400 rounded-full'></span>
                                    Vite
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                                    JavaScript
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
