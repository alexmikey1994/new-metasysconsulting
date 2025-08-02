export default function Footer() {
  return (
    <footer className="bg-[#13051F] text-white py-10 px-6 md:px-20 border-t border-white/10 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-base font-semibold mb-2">Metasys Consulting</h4>
          <p className="text-gray-400">Driving business innovation through strategy, technology, and talent.</p>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/#services" className="hover:underline">Services</a></li>
            <li><a href="/#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-2">Contact</h4>
          <p className="text-gray-400">Email: contact@metasysconsulting.com</p>
          <p className="text-gray-400">Phone: +91-XXXX-XXXXXX</p>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Metasys Consulting. All rights reserved.
      </div>
    </footer>
  );
}
