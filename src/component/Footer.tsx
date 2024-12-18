"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaCartArrowDown,
} from "react-icons/fa6";
import { FaHome, FaUtensils, FaWallet } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-black text-white py-10">
      {/* Desktop and Laptop View */}
      <div className="hidden md:flex justify-between items-start mx-auto px-10">
        {/* Logo Section */}
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Fast Buka Logo"
              width={120}
              height={80}
            />
          </Link>
          <p>Delicious Diversity, Delivered</p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a
              href="#"
              className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://x.com/fastbuka"
              className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <FaXTwitter className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/fastbukadelivery/"
              className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/fastbuka/"
              className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://tiktok.com/@fastbukadelivery"
              className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <FaTiktok className="text-white" />
            </a>
          </div>
          <p className="text-center py-4 mt-8">© 2024. All Rights Reserved</p>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h4 className="font-extraBold  text-[#0faf62] ">COMPANY</h4>
          <ul>
            <li>
              <a href="/" className="hover:underline hover:text-[#0faf62]">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:underline hover:text-[#0faf62]">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#0faf62]">
                Vendors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#0faf62]">
                Riders
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h4 className="font-extraBold  text-[#0faf62]">USEFUL</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline hover:text-[#0faf62]">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-[#0faf62]">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-[#0faf62]"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline hover:text-[#0faf62]">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* External Links */}
        <div className="space-y-2">
          <h4 className="font-extraBold  text-[#0faf62]">EXTERNAL</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline hover:text-[#0faf62]">
                Become a Vendor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-[#0faf62]">
                Become a Rider
              </a>
            </li>
            <li>
              <a
                href="/partner"
                className="hover:underline hover:text-[#0faf62]"
              >
                Work with Us
              </a>
            </li>
          </ul>
        </div>

        {/* Terms */}
        <div className="space-y-2">
          <h4 className="font-extraBold  text-[#0faf62]">TERMS</h4>
          <ul>
            <li>
              <a
                href="/privacy"
                className="hover:underline hover:text-[#0faf62]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline hover:text-[#0faf62]">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>


      

      {/* Mobile and Tablet View */}
      <div className="fixed md:hidden z-40 inset-x-0 bottom-0 bg-black pb-4 shadow-lg">
      <p className="text-center pt-[25px] pb-[20px]">Follow us</p>
      <div className="flex justify-center space-x-4">
            {/* Social Media Icons */}
           
            <a href="#" className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center">
              <FaFacebookF className="text-white" />
            </a>
            <a href="https://x.com/fastbuka" className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center" target="_blank">
              <FaXTwitter className="text-white" />
            </a>
            <a href="https://www.linkedin.com/company/fastbukadelivery/" className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center" target="_blank">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="https://www.instagram.com/fastbuka/" className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center" target="_blank">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://tiktok.com/@fastbukadelivery" className="bg-[#0faf62] w-8 h-8 rounded-full flex items-center justify-center" target="_blank">
              <FaTiktok className="text-white" />
            </a>
          </div>


      {/* <div className="flex justify-between items-center ">
    
        <div className="text-white text-center opacity-50 cursor-not-allowed">
          <FaHome className="w-8 h-8 mx-auto mb-1" />
          <span className="block text-sm">Home</span>
        </div>
        <div className="text-white text-center opacity-50 cursor-not-allowed">
          <FaCartArrowDown className="w-8 h-8 mx-auto mb-1" />
          <span className="block text-sm">Cart</span>
        </div>
        <div className="text-white text-center opacity-50 cursor-not-allowed">
          <FaWallet className="w-8 h-8 mx-auto mb-1" />
          <span className="block text-sm">Wallet</span>
        </div>

      </div> */}
      </div>
    </footer>
  );
}
