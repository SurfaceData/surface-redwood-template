import { render } from '@redwoodjs/testing/web'

import DatasetDownloadButton from './DatasetDownloadButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DatasetDownloadButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DatasetDownloadButton />)
    }).not.toThrow()
  })
})
