import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Link } from '@nextui-org/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Switch } from '@nextui-org/switch';
import Image from 'next/image';
import { flags } from '@constants/FLAGS';
import { COUNTRIES } from '@constants/COUNTRIES';

const MyNavbar = (): JSX.Element => (
  <Navbar shouldHideOnScroll>
    <NavbarBrand>
      <NavbarMenuToggle aria-label="Toggle navigation" />
    </NavbarBrand>
    <NavbarBrand>
      <Link href="/">
        <Image src="/img/nooze.svg" alt="Nooze logo" width={200} height={80} />
      </Link>
    </NavbarBrand>
    <NavbarContent>
      <NavbarItem>
        <Switch
          defaultSelected
          size="lg"
          color="success"
          endContent={`🌛`}
          startContent={`🌞`}
        ></Switch>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu>
      <NavbarMenuItem>
        <Link href={`/about`}>
          <span style={{ fontSize: 24 }}>🤷&nbsp;About</span>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href="/bookmarks">
          <span style={{ fontSize: 24 }}>🔖&nbsp;Bookmarks</span>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href={`/contact`}>
          <span style={{ fontSize: 24 }}>💌&nbsp;Contact</span>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Dropdown>
          <DropdownTrigger>
            <span style={{ fontSize: 24 }}>🗺️&nbsp;Countries</span>
          </DropdownTrigger>
          <DropdownMenu>
            {Array.from(COUNTRIES.entries()).map(([code, name]) => (
              <DropdownItem key={code}>
                <Link
                  href={`/country/${name?.toLowerCase().replaceAll(' ', '-')}`}
                >
                  <span style={{ fontSize: 24 }}>
                    {flags.get(code)}&nbsp;{name}
                  </span>
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarMenuItem>

      <NavbarMenuItem>
        <Link href={`/sources`}>
          <span style={{ fontSize: 24 }}>📰&nbsp;Sources</span>
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Dropdown>
          <DropdownTrigger>
            <span style={{ fontSize: 24 }}>⚖️&nbsp;Legal</span>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>
              <Link href={`/cookie`}>
                <span style={{ fontSize: 24 }}>🥠&nbsp;Cookie Policy</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href={`/privacy`}>
                <span style={{ fontSize: 24 }}>🔏&nbsp;Privacy Policy</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href={`/terms`}>
                <span style={{ fontSize: 24 }}>🧸&nbsp;Terms Of Use</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenuItem>
    </NavbarMenu>
  </Navbar>
);

export default MyNavbar;
