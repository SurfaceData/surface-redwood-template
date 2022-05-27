import { Loading, Empty, Failure, Success } from './LinkedBlogCell'
import { standard } from './LinkedBlogCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  mockCurrentUser({ name: 'Rob' })
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/LinkedBlogCell' }
