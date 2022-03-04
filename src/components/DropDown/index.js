import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import MenuItem from "./MenuItem";

export default function DropDown({ className }) {
  return (
    <Menu
      as="div"
      className={`absolute z-50 right-0 top-4 inline-block text-left ${className}`}
    >
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full active:bg-gray-500 shadow-sm px-2 py-2 text-sm font-medium text-white focus:ring-indigo-500">
          <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 divide-y divide-zinc-600">
            <div className="mb-2">
              <MenuItem>Add to queue</MenuItem>
              <MenuItem>Save to Watch later</MenuItem>
              <MenuItem>Save to playlist</MenuItem>
            </div>
            <div className="mt-2">
              <MenuItem>Not interested</MenuItem>
              <MenuItem>Don't recommend channel</MenuItem>
              <MenuItem>Report</MenuItem>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
