import Image from "next/image";
import { Phone, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
        
        {/* Image Section */}
        <div className="relative group">
          <Image
            src="/images/temple4.jpeg"
            width={500}
            height={600}
            alt="Pandit Ji"
            className="rounded-3xl shadow-2xl object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Small Badge */}
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg flex items-center gap-2">
            <Star className="text-orange-500" size={22} />
            <span className="font-semibold text-gray-800">
              23+ Years Experience
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div>
          
          <h2 className="text-5xl font-bold text-orange-700 mb-8 leading-tight">
            About Pandit Ji
          </h2>

          <p className="text-lg leading-9 text-gray-700 mb-6">
            <span className="font-semibold text-orange-700">
              Pandit Shri Chhotelala Ramlala Pande
            </span>{" "}
            has been serving devotees with dedication and devotion for many years
            at Shree Sidh Hanuman Mandir.
          </p>

          <p className="text-lg leading-9 text-gray-700 mb-6">
            He performs various Vedic rituals and spiritual ceremonies including
            Satyanarayan Pooja, Griha Pravesh, Vastu Poojan,
            Navgrah Shanti, Vivah Sanskar, Rudrabhishek,
            Jap Anushthan, and Kundali Guidance.
          </p>

          <p className="text-lg leading-9 text-gray-700 mb-8">
            His guidance and blessings bring peace, positivity,
            and spiritual harmony to every family.
          </p>

          {/* Contact Card */}
          <div className="bg-orange-100 border border-orange-200 rounded-2xl p-5 flex items-center gap-4 shadow-md w-fit">
            
            <div className="bg-orange-500 text-white p-3 rounded-full">
              <Phone size={24} />
            </div>

            <div>
              <p className="text-gray-600 text-sm">Contact Number</p>

              <a
                href="tel:9970084609"
                className="text-xl font-bold text-orange-700 hover:text-orange-800"
              >
                +91 9970084609
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}