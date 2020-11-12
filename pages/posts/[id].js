import Link from 'next/link';
import Content from '../../components/Content';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function MainContent({ id, content }) {
  return (
    <div>
      <nav className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/v1/workflow-mark-on-brand.svg"
                  alt="Workflow logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/posts/dashboard" as="/posts/dashboard">
                    <a
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        id === 'dashboard'
                          ? 'text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-indigo-600'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none'
                      }`}
                    >
                      Dashboard
                    </a>
                  </Link>

                  <Link href="/posts/team" as="/posts/team">
                    <a
                      className={`px-3 py-2 rounded-md text-sm font-medium  ${
                        id === 'team'
                          ? 'text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-indigo-600'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none'
                      }`}
                    >
                      Team
                    </a>
                  </Link>

                  <Link href="/posts/projects" as="/posts/projects">
                    <a
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        id === 'projects'
                          ? 'text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-indigo-600'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none'
                      }`}
                    >
                      Projects
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  className="p-1 border-2 border-transparent text-indigo-300 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-indigo-600"
                  aria-label="Notifications"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/* <!-- Profile dropdown --> */}
                <Dropdown triggererType="profile" />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button className="inline-flex items-center justify-center p-2 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 focus:text-white">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!--
          Mobile menu, toggle classes based on menu state.

          Open: "block", closed: "hidden"
      -->*/}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Team
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Projects
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Calendar
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Reports
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="space-y-1">
                <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-indigo-300">tom@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
                role="menuitem"
              >
                Your Profile
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
                role="menuitem"
              >
                Settings
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">{content}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <Content />
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { id: 'dashboard' } }, { params: { id: 'team' } }, { params: { id: 'projects' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const translate = (id) => {
    const translations = { dashboard: 'Dashboard', team: 'Team', projects: 'Projects' };
    return translations[id];
  };

  return {
    props: {
      id: params.id,
      content: translate(params.id),
    },
  };
}
