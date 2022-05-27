import LinkBlogForm from './LinkBlogForm'

export const generated = () => {
  mockCurrentUser({ name: 'Rob', sub: '1111-222' })
  return <LinkBlogForm />
}

export default { title: 'Components/LinkBlogForm' }
