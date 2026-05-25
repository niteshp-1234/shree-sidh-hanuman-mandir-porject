export default function Navbar() {
  return (
    <nav className="bg-orange-700 text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300">
    श्री सिद्ध हनुमान मंदिर
  </h1>

        <ul className="hidden md:flex gap-8 text-lg">

          <li>
            <a
              href="#home"
              className="hover:text-yellow-300 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-yellow-300 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-yellow-300 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-yellow-300 transition"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}