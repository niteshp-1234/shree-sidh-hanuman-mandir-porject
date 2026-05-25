import Image from "next/image";

const images = [
  "/images/temple1.jpeg",
  "/images/temple1.jpeg",
  "/images/temple1.jpeg",
  "/images/temple1.jpeg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-orange-50">

      <h2 className="text-center text-5xl font-bold text-orange-700 mb-14">
        Temple Gallery
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-[350px] overflow-hidden rounded-3xl shadow-2xl"
          >

            <Image
              src={img}
              alt="Temple"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />

          </div>
        ))}

      </div>

    </section>
  );
}