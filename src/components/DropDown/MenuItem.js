import React from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuItem({ children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-600 text-white" : "text-white",
            "block px-4 py-2 text-sm"
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}
