const services = [
  "Satyanarayan Pooja",
  "Vastu Poojan",
  "Navgrah Shanti",
  "Jap Anushthan",
  "Saptpadi Vivah",
  "Griha Pravesh",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">

      <h2 className="text-center text-5xl font-bold text-orange-700 mb-14">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-50 p-8 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold text-center">
              {service}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}