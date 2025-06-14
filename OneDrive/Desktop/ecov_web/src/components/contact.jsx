// src/components/Contact.jsx
import { FaWhatsapp, FaLine } from "react-icons/fa";
import lineGisel from "../images/line_gisel.jpg";
import lineCella from "../images/line_cella.jpg";
import lineNaka from "../images/line_naka.jpg";

const contacts = [
  {
    name: "Gisela Susanto",
    phone: "6281311813241",
    lineImage: lineGisel,
  },
  {
    name: "Marcella Hakim",
    phone: "6281290509536",
    lineImage: lineCella,
  },
  {
    name: "Ekanaka Hasudungan Pratama",
    phone: "6281283335410",
    lineImage: lineNaka,
  },
];

const Contact = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Any Question?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <div className="text-center" key={index}>
            <h3 className="text-lg font-semibold mb-4">{contact.name}</h3>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${contact.phone}`}
                className="flex items-center justify-center bg-emerald-500 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Contact Me! <FaWhatsapp className="ml-2" />
              </a>
              <a
                href={contact.lineImage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-emerald-500 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Contact Me! <FaLine className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
