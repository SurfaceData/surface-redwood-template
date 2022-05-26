import { render } from '@redwoodjs/testing/web'

import SyncBlogForm from './SyncBlogForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SyncBlogForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SyncBlogForm />)
    }).not.toThrow()
  })
})
