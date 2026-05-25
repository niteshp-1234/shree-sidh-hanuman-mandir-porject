import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl text-white text-4xl z-50"
    >
      <FaWhatsapp />
    </a>
  );
}