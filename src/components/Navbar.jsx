//  import React from "react";
// import styled from "styled-components";

// const Section=styled.div`
//   display:flex;
//   justify-content:center;
//   justify-content:space-between;
//   align-items:center;

//   position:fixed;
//   background:#13022e;

//   // #13022e
//   // #210251

// `
// const Container=styled.div`
// width:1540px;
// height:90px;
// display:flex;
// justify-content:center;
//   justify-content:space-between;
//   align-items:center;

// `
// const Links=styled.div`
// display:flex;
// align-items:center;
// gap:50px;
// `;

// const Logo=styled.img`
// height:80px;
// width:130px;
// `

// ;

// const List=styled.ul`
// display:flex;
// gap:40px;
// list-style:none;
// `;

// const ListItem=styled.li`
// cursor:pointer;
// `;
// const Icons=styled.div`
// display:flex;
// align-items:center;
// gap:20px;
// cursor:pointer;
// `

// const Icon=styled.img`
// width:20px;
// cursor:pointer;
// `;
// const Button=styled.button`
// width:100px;
// padding:10px;
// background-color:#da4ea2;
// color:white;
// border:none;
// border-radius:5px;
// cursor:pointer;
// `;

// const Navbar = () => {
//     return (
//         <Section >
//           <Container>
//           <Links>
//           <Logo src="./img/mplogo.png"></Logo>
//           {/* <List>
//             <ListItem >Home</ListItem>
//             <ListItem>About</ListItem>
//             <ListItem>Works</ListItem>
//             <ListItem>Contact</ListItem>

//           </List> */}
//            <ul id="navbarul" >
//       <li id="navbarli">
//         <a  href="#Home">Home</a>
//       </li>
//       <li  id="navbarli">
//         <a  href="#Works">About</a>
//       </li>
//       <li id="navbarli">
//         <a  href="#ProjectPage">Works</a>
//       </li>
//       <li id="navbarli">
//         <a  href="#Contact">Contact</a>
//       </li>
//     </ul>
//           </Links>
//           <Icons>
//             <Icon src="./img/search.png"></Icon>

//           <a className="btn" href="#Contact">Hire now</a>
//           </Icons>

//           </Container>
//          </Section>

//      );
// }

// export default Navbar;

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#Home", current: true },
  { name: "Works", href: "#Works", current: false },
  { name: "Projects", href: "#Projects", current: false },
  { name: "Contact", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    className='h-12'
                    src='/img/mplogo.png'
                    alt='Your Company'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  {/* <BellIcon className='h-6 w-6' aria-hidden='true' /> */}
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white text-xl"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-lg font-medium "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
