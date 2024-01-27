import Logo from "../Logo";

const Footer = () => {
  return (  
    <div className="py-10 bg-zinc-200">
      <div className="flex flex-col items-center justify-center">
        <p>© 2024</p>
        <Logo altText=' Copyright 2024 Mystic Grove Games' maxWidth={200} />
      </div>
    </div>
  );
}
 
export default Footer;