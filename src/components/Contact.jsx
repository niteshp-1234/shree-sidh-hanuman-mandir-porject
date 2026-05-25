export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">

      <h2 className="text-center text-5xl font-bold text-orange-700 mb-14">
        Contact Pandit Ji
      </h2>

      <form className="max-w-3xl mx-auto flex flex-col gap-6 px-6">

        <input
          type="text"
          placeholder="Your Name"
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="border p-4 rounded-xl"
        />

        <textarea
          placeholder="Pooja Details"
          className="border p-4 rounded-xl h-40"
        />

        <button className="bg-orange-700 text-white py-4 rounded-xl text-xl">
          Submit
        </button>

      </form>
    </section>
  );
}