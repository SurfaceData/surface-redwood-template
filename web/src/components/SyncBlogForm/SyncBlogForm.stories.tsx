import SyncBlogForm from './SyncBlogForm'

export const generated = () => {
  mockCurrentUser({ name: 'Rob', sub: '1111-222' })
  return <SyncBlogForm />
}

export default { title: 'Components/SyncBlogForm' }
