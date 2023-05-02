import { FC, Fragment, SVGAttributes } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CloseToMenuSVG, MenuToCloseSVG } from "@/assets/svg";

type FlyOutMenuSolution = {
  name: string;
  description: string;
  href: string;
  icon: FC<SVGAttributes<SVGSVGElement>>;
};

type FlyOutMenuCallToAction = {
  name: string;
  href: string;
  icon: FC<SVGAttributes<SVGSVGElement>>;
};

export interface FlyOutMenuProps {
  solutions: FlyOutMenuSolution[];
  callsToAction: FlyOutMenuCallToAction[];
}

export const FlyOutMenu: FC<FlyOutMenuProps> = ({ solutions, callsToAction }) => {
  return (
    <Popover className="lg:hidden">
      <Popover.Button className="inline-flex items-center gap-x-1 text-4xl font-semibold leading-6 text-gray-900">{({ open }) => (open ? <MenuToCloseSVG /> : <CloseToMenuSVG />)}</Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 top-24 z-10 flex -translate-x-1/2">
          <section className="flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <ul className="p-2">
              {solutions.map((item) => (
                <li key={item.name} className="group relative flex gap-x-2 rounded-lg p-4 hover:bg-gray-50">
                  <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 whitespace-nowrap text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </section>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default FlyOutMenu;
