/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0 */
import Nav from '../components/nav';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  );
}
