/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0  jsx-a11y/anchor-is-valid:0 */

import MenuMobile from '../components/MenuMobile';

export default function IndexPage() {
  return (
    <div>
      {/*
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  */}
      <MenuMobile />
    </div>
  );
}
