// src/components/Links.js
import { HashLink as Link } from 'react-router-hash-link';

export default function Links({ setOpen }) {
  const handleClick = () => setOpen(false); // Close the sidebar on link click

  return (
    <div className="links">
      <Link to="#" smooth onClick={handleClick}>Home</Link>
      <Link to="#about" smooth onClick={handleClick}>About</Link>
      <Link to="#projects" smooth onClick={handleClick}>Projects</Link>
      <Link to="#skills" smooth onClick={handleClick}>Skills</Link>
      <Link to="#contact" smooth onClick={handleClick}>Contact</Link>
    </div>
  );
}
