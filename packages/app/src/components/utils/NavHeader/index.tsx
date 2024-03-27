import React from 'react';
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from '@material-tailwind/react';
import { VscGithubAlt, VscChevronDown } from 'react-icons/vsc';
import MyIcon from '@/images/icons/my_icon.svg';

function ProfileMenu() {
  const [
    isMenuOpen,
    setIsMenuOpen,
  ] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="igara account icon"
            className="border border-gray-900 p-0.5"
            src={MyIcon.src}
          />
          <VscChevronDown
            strokeWidth={2.5}
            className={`size-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1" placeholder="">
        <MenuItem
          onClick={closeMenu}
          className="flex items-center gap-2 rounded"
        >
          {React.createElement(VscGithubAlt, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            placeholder=""
          >
            GitHub
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function NavList() {
  const [
    isMenuOpen,
    setIsMenuOpen,
  ] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="igara account icon"
            className="border border-gray-900 p-0.5"
            src={MyIcon.src}
          />
          <VscChevronDown
            strokeWidth={2.5}
            className={`size-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1" placeholder="">
        <MenuItem
          onClick={closeMenu}
          className="flex items-center gap-2 rounded"
        >
          {React.createElement(VscGithubAlt, {
            className: `h-4 w-4`,
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            placeholder=""
          >
            GitHub
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function NavHeader() {
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:rounded-full lg:px-8 lg:py-4">
      <div className="text-blue-gray-900 relative mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="ml-2 mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>

        <NavList />
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
