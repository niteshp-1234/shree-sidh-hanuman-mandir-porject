import {
  Home,
  HeartHandshake,
  Sparkles,
  ScrollText,
  Users,
  Landmark,
} from "lucide-react";

const services = [
  {
    title: "Satyanarayan Pooja",
    description:
      "A sacred ritual performed for prosperity, peace, and divine blessings in family life.",
    icon: <Sparkles size={45} />,
  },
  {
    title: "Vastu Poojan",
    description:
      "Traditional pooja performed before entering a new home or office for positive energy.",
    icon: <Home size={45} />,
  },
  {
    title: "Navgrah Shanti",
    description:
      "Special prayers and rituals to reduce planetary doshas and improve life harmony.",
    icon: <Landmark size={45} />,
  },
  {
    title: "Jap Anushthan",
    description:
      "Powerful mantra chanting and spiritual practices for mental peace and spiritual growth.",
    icon: <ScrollText size={45} />,
  },
  {
    title: "Saptpadi Vivah",
    description:
      "Complete Hindu wedding rituals with traditional Vedic mantras and blessings.",
    icon: <HeartHandshake size={45} />,
  },
  {
    title: "Griha Pravesh",
    description:
      "Auspicious housewarming ceremony performed to invite positivity and divine grace.",
    icon: <Users size={45} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-orange-700">
          Our Services
        </h2>

        <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-5 text-gray-600 text-lg">
          Sacred rituals and spiritual services performed with devotion
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-orange-100"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition duration-500">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center leading-7">
              {service.description}
            </p>

            {/* Bottom Button */}
            <div className="text-center mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md">
                Read More
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}