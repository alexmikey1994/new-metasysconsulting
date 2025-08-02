"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [showServices, setShowServices] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setShowServices(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#13051F]/90 backdrop-blur-md border-b border-white/10 text-white py-6 px-10 md:px-20 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={50} />
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-sm uppercase font-medium">
        <Link href="/" className="hover:underline">Home</Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowServices(!showServices)}
            className="hover:underline"
          >
            SERVICES
          </button>

          {showServices && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white text-black rounded-lg shadow-xl w-[720px] flex p-6 z-50"
            >
              <div className="w-1/2 pr-6 border-r border-gray-300">
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Accelerate<br />
                  to market<br />
                  <span className="text-cyan-500">and go live in just weeks</span>
                </h3>
              </div>

              <div className="w-1/2 pl-6 flex flex-col justify-center space-y-4">
                {[
                  "data-analytics",
                  "product-management",
                  "project-management",
                  "talent-resourcing",
                  "web-development",
                  "custom-solutions",
                ].map((slug, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${slug}`}
                    className="hover:underline text-sm transition-colors duration-200"
                    onClick={() => setShowServices(false)}
                  >
                    {slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/book-online" className="hover:underline">Book Online</Link>

        <Link href="/dashboard">
          <button className="ml-2 px-4 py-1 rounded bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold shadow">
            DASHBOARD
          </button>
        </Link>
      </nav>
    </header>
  );
}
