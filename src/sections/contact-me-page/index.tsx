import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactMePage() {
  return (
    <section className="w-screen max-h-[1200px] flex flex-col items-center justify-center bg-[#111827] text-white py-20 px-6">
      {/* wrapper utama */}
      <div className="w-full items-center gap-10 flex flex-col">
        <div className="items-center text-center flex flex-col">
          <h2 className="">
            <span className="text-[32px] md:text-[42px] font-bold">
              Contact{" "}
            </span>
            <span className="text-[32px] md:text-[42px] font-bold text-yellow-400">
              Me
            </span>
          </h2>
          <p className="text-gray-400 mt-2">Let's connect and collaborate!</p>
        </div>
        <div className="w-full max-w-[600px] bg-[#020617] p-8 rounded-lg shadow-md text-center">
          <form className="mt-6 flex flex-col gap-4">
            {/* Input Nama */}
            <div>
              <label className="block text-gray-400 text-left">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-gray-400 text-left">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Input Message */}
            <div>
              <label className="block text-gray-400 text-left">Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
              />
            </div>

            {/* Tombol Submit (tidak berfungsi) */}
            <button
              type="button"
              className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition cursor-default"
            >
              Send Message
            </button>
          </form>

          {/* Ikon Sosial Media */}
          <div className="mt-6 flex justify-center gap-6 text-2xl">
            <a
              href="mailto:your-email@example.com"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
