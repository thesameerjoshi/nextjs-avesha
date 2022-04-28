import { Cross as Hamburger } from "hamburger-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { animated, useTransition, useChain } from "react-spring";
import { DialogOverlay, DialogContent } from "@reach/dialog";

const AnimatedDialogOverlay = animated(DialogOverlay);

const isInternalLink = (href) => {
  // this is cheap, doesn't catch protocol links like //google.com
  return href && href.startsWith("/");
};

function MobileNav({ isOpen, setIsOpen }) {
  const headerLinks = [
    {
      title: "Music",
      href: "/music"
    },
    {
      title: "Blog",
      href: "/blog"
    },
    {
      title: "Github",
      href: "https://github.com/ryanrishi"
    }
  ];

  const overlayRef = useRef();
  const overlayTransitions = useTransition(
    isOpen,
    {},
    {
      ref: overlayRef,
      from: { top: "-100vh" },
      to: { top: 0 }
    }
  );

  const contentRef = useRef();
  const contentTransitions = useTransition(
    isOpen ? [1, 2, 3, 4] : [],
    {},
    {
      ref: contentRef,
      trail: 30
    }
  );

  useChain(
    isOpen ? [overlayRef, contentRef] : [contentRef, overlayRef],
    0,
    isOpen ? 0 : 0.1
  );

  return (
    <div className="flex items-center justify-between border-b-2">
      <span className="uppercase">
        Ryan <b>Rishi</b>
      </span>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen &&
        headerLinks.map(
          ({ title, href }) =>
            isInternalLink(href) && <Link href={href}>{title}</Link>
        )}
    </div>
  );
}

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div>
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
    </div>
  );
}

export default Navbar;
