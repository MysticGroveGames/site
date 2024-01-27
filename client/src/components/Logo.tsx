
type LogoProps = {
  maxWidth?: number;
  altText?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({maxWidth, altText}:LogoProps) => {
  return ( 
      <img src="/logo.png" style={{maxWidth: `${maxWidth}px` || '200px'}} alt={altText || "Home"} />
   );
}
 
export default Logo;