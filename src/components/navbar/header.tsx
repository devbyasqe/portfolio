import Link from "next/link";
import React from "react";
import { Container } from "../ui";

const Header = () => {
  return (
    <>
      <Container className="pointer-events-none h-8" />

      <header className="border-t border-b">
        <Container as={"nav"}>
          <Link
            href={"/"}
            className="bg-background inline-flex h-14 items-center justify-center border-r px-4 py-2 text-2xl font-medium"
          >
            ASHIQUE
          </Link>
        </Container>
      </header>
    </>
  );
};

export default Header;
