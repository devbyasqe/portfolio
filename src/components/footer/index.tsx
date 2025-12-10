import React from "react";
import ThemeToggler from "../ui/theme-toggler";
import { Container } from "../ui";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-b">
        <Container className="flex items-center justify-between px-4 py-2">
          <div className="bg-accent inline-flex gap-1 border p-1 text-sm leading-none">
            <p className="space-x-0.5">
              <span>&copy;</span>
              <span>{new Date().getFullYear()}</span>
            </p>
            <p className="font-medium">ASHIQUE</p>
          </div>
          <ThemeToggler />
        </Container>
      </footer>
      <Container className="pointer-events-none h-2" />
    </>
  );
};

export default Footer;
