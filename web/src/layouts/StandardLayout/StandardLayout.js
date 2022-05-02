import { Link, routes } from '@redwoodjs/router';

import Navigation from 'src/components/Navigation'

const StandardLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Surface Data Collector</h1>
        <Navigation />
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default StandardLayout
