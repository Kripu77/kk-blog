import React from "react";
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterLinkProps {
  items: {
    title: string;
    url: string;
    description: string;
    icon: string;
  }[];
}

const FooterLinks: React.FC<FooterLinkProps> = ({ items }) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-6 h-6 text-muted-foreground hover:text-black transition ease-in delay-75" />;
      case "linkedin":
        return <Linkedin className="w-6 h-6 text-muted-foreground hover:text-black transition ease-in delay-75" />;
      case "mail":
        return <Mail className="w-6 h-6 text-muted-foreground hover:text-black transition ease-in delay-75" />;
      default:
        return null;
    }
  };

  return (
      <ul className="flex space-x-10">
        {items.map((item) => (
          <li key={item.description} className="flex items-center justify-center ">
            <a href={item.url} aria-label={item.description} target="_blank" rel="noopener noreferrer">
              {renderIcon(item.icon)}
            </a>
          </li>
        ))}
      </ul>

  );
};

export default FooterLinks;
