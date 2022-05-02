import { Link, routes } from '@redwoodjs/router';

const StandardLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Surface Data Collector</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default StandardLayout
