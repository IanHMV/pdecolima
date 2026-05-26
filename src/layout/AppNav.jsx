import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

function NavListMenu({ items }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = items.map(({ title, description, link }) => (
    <a href={link} key={title} target="_blank" rel="noopener noreferrer">
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="span" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
              Sistemas
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="white"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img src="/img/pde-logo.png" alt="pdecolima-logo" className="h-28 w-36" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
        Sistemas
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

export default function AppNav({ navItems }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setIsNavOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-5 bg-[#0A1F3D] shadow-2xl border-b-2 border-[#E6E6E6]">
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 bg-opacity-100 bg-white">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 px-2 ml-2 cursor-pointer py-1.5 font-medium flex items-center rounded-3xl"
          >
            <img src="/img/icono.png" alt="pdecolima" className="size-10" />
            <span className="font-sans font-bold">PDECOLIMA</span>
          </Typography>
          <div className="hidden lg:block">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              <NavListMenu items={navItems} />
            </ul>
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={() => setIsNavOpen((cur) => !cur)}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <ul className="mt-2 mb-4 flex flex-col gap-2">
            <NavListMenu items={navItems} />
          </ul>
        </MobileNav>
      </Navbar>
    </div>
  );
}
