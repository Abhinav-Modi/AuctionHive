"use client";
import React, { useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "./Search";
import { useParamsStore } from "../hooks/useParamsStore";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const resetPage = useParamsStore((state) => state.reset);

	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
			<div className="container mx-auto">
				<div className="flex justify-between items-center px-4 py-3">
					{/* Logo */}
					<div
						onClick={resetPage}
						className="flex items-center space-x-2 group cursor-pointer"
					>
						<AiOutlineCar
							size={34}
							className="text-red-500 transform group-hover:scale-110 transition-transform duration-300"
						/>
						<span className="text-2xl font-semibold text-red-500 group-hover:text-red-600 transition-colors duration-300">
							AuctionHive
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-6">
						<nav className="flex items-center space-x-4">
							<Search />
							<a
								href="#"
								className="relative text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-red-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-100"
							>
								About
							</a>
						</nav>
					</div>

					{/* Desktop Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						<button className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-red-500 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:transition-all after:duration-300 hover:after:w-full hover:after:opacity-100">
							Sign In
						</button>
						<button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300">
							Start Bidding
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden p-2 rounded-md text-gray-500 hover:text-red-500 hover:rotate-180 transition-all duration-300 focus:outline-none"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<FaTimes className="h-6 w-6" />
						) : (
							<FaBars className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden px-4 pt-2 pb-4 space-y-3 transform transition-all duration-300 ease-in-out ${
						isMenuOpen
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4 pointer-events-none"
					}`}
				>
					<div className="mb-4">
						<Search />
					</div>
					<a
						href="#"
						className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-300"
					>
						About
					</a>
					<div className="pt-4 space-y-2">
						<button className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300">
							Sign In
						</button>
						<button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
							Start Bidding
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
