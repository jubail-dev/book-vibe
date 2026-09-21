import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-2"
            >
              📚 <span>Book Vibe</span>
            </Link>

            <p className="text-sm text-neutral-content/70 mt-4 leading-6">
              Discover your next favorite book, keep track of your reading
              journey, and share your love for books with Book Vibe.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-neutral-content/10 flex items-center justify-center hover:bg-primary transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-sm text-neutral-content/70">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/books" className="hover:text-primary transition">
                  Books
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-books"
                  className="hover:text-primary transition"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>

            <ul className="space-y-3 text-sm text-neutral-content/70">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>

            <p className="text-sm text-neutral-content/70 mb-4">
              Subscribe to get the latest book recommendations and updates.
            </p>

            <div className="join w-full">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered join-item w-full text-base-content"
              />

              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-content/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-neutral-content/60">
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>

          <p className="text-sm text-neutral-content/60">
            A project by{" "}
            <span className="font-semibold text-neutral-content">
              JR Jubail
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
