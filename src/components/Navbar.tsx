import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-blue-400">
      <Image src="/source" alt="logo" width={50} height={50} />

      <button>About me</button>
      <button>Proyects</button>
      <button>Education</button>
      <button>Contact</button>
    </div>
  );
};

export default Navbar;
