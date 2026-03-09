"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaIndustry,
  FaUserTie,
  FaLink,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Audit Firms in Dubai
          </h3>
          <p className="text-sm leading-relaxed">
            Professional auditing and accounting services in Dubai, ensuring
            compliance and financial transparency for businesses across the UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#F59E0B] cursor-pointer">Home</li>
            <li className="hover:text-[#F59E0B] cursor-pointer">About Us</li>
            <li className="hover:text-[#F59E0B] cursor-pointer">Services</li>
            <li className="hover:text-[#F59E0B] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Audit Services</h4>
          <ul className="space-y-2">
            <li>Due Diligence Audit</li>
            <li>Forensic Audit</li>
            <li>ICV Audit</li>
            <li>Internal Audit</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>+971 42 500 251</p>
          <p>+971 50 7869887</p>
          <p>sales@auditfirmsindubai.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 Audit Firms in Dubai. All rights reserved.
      </div>
    </footer>
  );
}
