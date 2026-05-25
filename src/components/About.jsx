import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-orange-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <Image
          src="/images/temple4.jpeg"
          width={500}
          height={600}
          alt="Pandit Ji"
          className="rounded-2xl shadow-2xl"
        />

        <div>

          <h2 className="text-5xl font-bold text-orange-700 mb-8">
            About Pandit Ji
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            Pandit Ji has been serving at
            Shree Sidh Hanuman Mandir for
            the last 23 years.

            He performs all types of
            Vedic Pooja including:

            Satyanarayan Bhagwan Pooja,
            Vastu Poojan,
            Navgrah Shanti,
            Jap Anushthan,
            Saptpadi Vivah,
            Griha Pravesh,
            Rudrabhishek,
            and Kundali Guidance.

            Kundali guidance is done using
            Panchang, birth date,
            birth timing and place.
          </p>

        </div>

      </div>
    </section>
  );
}