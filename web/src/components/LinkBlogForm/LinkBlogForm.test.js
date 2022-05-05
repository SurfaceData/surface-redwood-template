import { render } from '@redwoodjs/testing/web'

import LinkBlogForm from './LinkBlogForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LinkBlogForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkBlogForm />)
    }).not.toThrow()
  })
})
