import Link from "next/link";
import React from "react";
import { Container } from "../ui";
import { CustomLink } from "../ui/buttons";

const Header = () => {
  return (
    <>
      <Container className="pointer-events-none h-8" />

      <header className="border-t border-b">
        <Container
          as={"nav"}
          className="flex items-center justify-between pe-4"
        >
          <Link
            href={"/"}
            className="bg-background inline-flex h-14 items-center justify-center border-r px-4 py-2 text-2xl font-medium"
          >
            ASHIQUE
          </Link>
          <CustomLink
            href={"/about#contacts"}
            padding={"default"}
            variant={null}
            hover={"enlarge"}
            enlargeVariant={"secondary"}
          >
            <span className="bg-muted inline-flex size-2.5 rounded-full">
              <span className="bg-muted size-full animate-ping rounded-full" />
            </span>
            <span>Hire Me</span>
          </CustomLink>
        </Container>
      </header>
    </>
  );
};

export default Header;
