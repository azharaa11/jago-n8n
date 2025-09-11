// src/components/Footer.tsx
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid 4 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Jago N8N</h2>
            <p className="text-sm text-gray-400">
              Platform pembelajaran & automation untuk membantu siapa saja
              naik level dengan workflow cerdas.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Beranda</a></li>
              <li><a href="#" className="hover:text-white">Kursus</a></li>
              <li><a href="#" className="hover:text-white">Bonus</a></li>
              <li><a href="#" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Dokumentasi</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Jago N8N. Semua Hak Dilindungi.
        </div>
      </div>
    </footer>
  );
}
