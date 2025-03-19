interface IButton {
  href?: string;
  text?: string;
  className?: string;
}

export default function ButtonContact({
  href = "#contact",
  text = "Contact Us",
  className = "",
}: IButton) {
  return (
    <a
      href={href}
      className={`bg-[#FACC15] font-bold text-black px-6 py-2 rounded-md transition duration-300 ease-in-out hover:bg-[#eab308] flex items-center justify-center whitespace-nowrap ${className}`}
    >
      {text}
    </a>
  );
}
