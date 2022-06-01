import { render } from '@redwoodjs/testing/web'

import RegisterBlogForm from './RegisterBlogForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RegisterBlogForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterBlogForm />)
    }).not.toThrow()
  })
})
