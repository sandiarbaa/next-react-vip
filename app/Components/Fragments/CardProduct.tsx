import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Elements/Button";

interface CardProductProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
}

interface BodyProps {
  children: string;
  title: string;
}

interface FooterProps {
  price: string;
}

interface CardProductComponent extends React.FC<CardProductProps> {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
}

const CardProduct: CardProductComponent = ({ children }) => {
  return (
    <div className="w-full max-w-xs rounded-xl border shadow bg-gray-800 m-2">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image }) => {
  return (
    <Link href={"#"}>
      <Image
        src={image}
        alt="shoes1"
        width={320}
        height={0}
        className="p-5"
        priority
      />
    </Link>
  );
};

const Body: React.FC<BodyProps> = ({ children, title }) => {
  return (
    <div className="p-5">
      <Link href={"#"}>
        <h5 className="text-xl font-bold text-white tracking-tight">{title}</h5>
        <p className="text-sm text-white">{children}</p>
      </Link>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ price }) => {
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <span className="font-bold text-white">{price}</span>
      <Link href={"#"}>
        <Button>Add To Cart</Button>
      </Link>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
