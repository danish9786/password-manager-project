import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordsArry, setpasswordsArry] = useState([])
    const [showPasswordInput, setShowPasswordInput] = useState(false)

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordsArry(JSON.parse(passwords))
        }

    }, [])

    const ref = useRef()

    const handelchange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const savepassword = () => {
        if(form.site.length < 3 && form.username.length < 3 && form.password.length < 6) {
            toast.error("All fields must be filled correctly", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        setpasswordsArry([...passwordsArry, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordsArry, { ...form, id: uuidv4() }]))
        console.log([...passwordsArry, { ...form, id: uuidv4() }])
        setform({ site: "", username: "", password: "" })

        toast.success("Password saved successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    // Copy function
    const handleCopy = (text, type) => {
        if (navigator && navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success(`${type} copied to clipboard!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }).catch(() => {
                toast.error("Failed to copy to clipboard", {
                    position: "top-right",
                    autoClose: 2000,
                });
            });
        } else {
            toast.error("Clipboard not supported", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const showPassword = () => {
        setShowPasswordInput(!showPasswordInput)
    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this password?");
        if (confirmDelete) {
            const updatedPasswords = passwordsArry.filter(item => item.id !== id);
            setpasswordsArry(updatedPasswords);
            localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
            toast.success("Password deleted successfully!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    const handleEdit = (id) => {
        const passwordToEdit = passwordsArry.find(item => item.id === id);
        if (passwordToEdit) {
            // Populate form with existing data
            setform({ site: passwordToEdit.site, username: passwordToEdit.username, password: passwordToEdit.password });

            // Remove the item from array without confirmation dialog
            const updatedPasswords = passwordsArry.filter(item => item.id !== id);
            setpasswordsArry(updatedPasswords);
            localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

            toast.success("Password loaded for editing!", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
                <div className="container md:px-4 py-4 sm:py-8 md:w-full">
                    <div className="max-w-4xl mx-auto">
                        {/* Header Section */}
                        <div className='flex flex-col text-center mb-8 sm:mb-12'>
                            <div className="mb-4">
                                <span className='font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
                                    Pass<span className='text-green-600'>Manage</span>
                                </span>
                                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mt-2"></div>
                            </div>
                            <span className="text-sm sm:text-base text-gray-600 font-medium">Secure • Simple • Smart Password Management</span>
                        </div>

                        {/* Enhanced Form Section */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-3 sm:p-4 mb-6'>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">+</span>
                                </span>
                                Add New Password
                            </h3>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="relative group">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                    <input
                                        value={form.site}
                                        onChange={handelchange}
                                        className='w-full p-3 sm:p-4 px-4 sm:px-5 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 bg-white/70 backdrop-blur-sm hover:border-gray-300'
                                        placeholder='https://example.com'
                                        type="text"
                                        name="site"
                                        id="sitename"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="relative group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                        <input
                                            value={form.username}
                                            onChange={handelchange}
                                            className='w-full p-3 sm:p-4 px-4 sm:px-5 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 bg-white/70 backdrop-blur-sm hover:border-gray-300'
                                            placeholder='your@email.com'
                                            type="text"
                                            name="username"
                                            id="username"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                        <div className='relative'>
                                            <input
                                                value={form.password}
                                                onChange={handelchange}
                                                className='w-full p-3 sm:p-4 px-4 sm:px-5 pr-12 sm:pr-14 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all duration-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 bg-white/70 backdrop-blur-sm hover:border-gray-300'
                                                placeholder='Create strong password'
                                                type={showPasswordInput ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                            <button
                                                type="button"
                                                onClick={showPassword}
                                                className='absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 z-10'>
                                                <img
                                                    ref={ref}
                                                    src={showPasswordInput ? "src/assets/passwordicon2.svg" : "src/assets/passwordicon1.svg"}
                                                    alt="toggle password visibility"
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Save Button */}
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={savepassword}
                                    className='group relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3'>
                                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    <span className='text-xl sm:text-2xl'>💾</span>
                                    <span className='text-sm sm:text-base'>Save Password</span>
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Passwords Section */}
                        <div className="bg-white/80 backdrop-blur-sm shadow-xl p-2">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-3">
                                    <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">🔐</span>
                                    </span>
                                    Your Passwords
                                </h2>
                                <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full">
                                    <span className="text-sm font-medium text-gray-700">{passwordsArry.length} passwords</span>
                                </div>
                            </div>

                            {passwordsArry.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🔒</span>
                                    </div>
                                    <p className="text-gray-500 text-sm sm:text-base mb-2">No passwords saved yet</p>
                                    <p className="text-gray-400 text-xs sm:text-sm">Add your first password above to get started</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto rounded-xl">
                                    <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white">
                                                <th className="py-4 px-4 sm:px-6 font-semibold text-left text-sm sm:text-base">🌐 Website</th>
                                                <th className="py-4 px-4 sm:px-6 font-semibold text-left text-sm sm:text-base">👤 Username</th>
                                                <th className="py-4 px-4 sm:px-6 font-semibold text-left text-sm sm:text-base">🔐 Password</th>
                                                <th className="py-4 px-4 sm:px-6 font-semibold text-center text-sm sm:text-base">⚡ Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {passwordsArry.map((item, index) => (
                                                <tr key={index} className={`group ${index % 2 === 0 ? 'bg-gradient-to-r from-green-50/50 to-blue-50/50' : 'bg-white'} hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 transition-all duration-300`}>
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className="flex items-center gap-3 min-w-0 flex-1">
                                                                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                                    <span className="text-white text-xs">🌐</span>
                                                                </div>
                                                                <a href={item.site} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium truncate">{item.site}</a>
                                                            </div>
                                                            <button
                                                                onClick={() => handleCopy(item.site, "Site URL")}
                                                                className="p-2 hover:bg-white/50 rounded-lg transition-all duration-200 group-hover:scale-110">
                                                                <img src="./src/assets/copyicon.svg" alt="copy" className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className="flex items-center gap-3 min-w-0 flex-1">
                                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                                    <span className="text-white text-xs">👤</span>
                                                                </div>
                                                                <span className="font-medium text-gray-700 text-sm truncate">{item.username}</span>
                                                            </div>
                                                            <button
                                                                onClick={() => handleCopy(item.username, "Username")}
                                                                className="p-2 hover:bg-white/50 rounded-lg transition-all duration-200 group-hover:scale-110">
                                                                <img src="./src/assets/copyicon.svg" alt="copy" className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className="flex items-center gap-3 min-w-0 flex-1">
                                                                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                                    <span className="text-white text-xs">🔐</span>
                                                                </div>
                                                                <span className="font-mono text-gray-600 text-sm">{"●".repeat(Math.min(item.password.length, 12))}</span>
                                                            </div>
                                                            <button
                                                                onClick={() => handleCopy(item.password, "Password")}
                                                                className="p-2 hover:bg-white/50 rounded-lg transition-all duration-200 group-hover:scale-110">
                                                                <img src="./src/assets/copyicon.svg" alt="copy" className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 sm:px-6">
                                                        <div className="flex items-center justify-center gap-3">
                                                            <button
                                                                onClick={() => handleEdit(item.id)}
                                                                className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200 group-hover:scale-110">
                                                                <img src="./src/assets/editicon.svg" alt="edit" className="w-5 h-5" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(item.id)}
                                                                className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-all duration-200 group-hover:scale-110">
                                                                <img src="./src/assets/deleteicon.svg" alt="delete" className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Manager
