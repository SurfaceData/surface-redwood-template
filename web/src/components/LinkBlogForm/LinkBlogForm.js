import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  Label,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { QUERY as ContentSubmissionsQuery } from 'src/components/ContentSubmissionsCell'

const LINK = gql`
  mutation LinkBlog($input: LinkBlogInput!) {
    linkBlog(input: $input) {
      id
      synckey
    }
  }
`

const LinkBlogForm = () => {
  const formMethods = useForm()
  const { currentUser } = useAuth()
  const [linkBlog, { loading, error }] = useMutation(LINK, {
    onCompleted: (result) => {
      toast.success('Thank you for linking your blog')
      //formMethods.reset()
    },
    refetchQueries: [
      {
        query: ContentSubmissionsQuery,
        variables: { userId: currentUser.sub },
      },
    ],

  })

  const onSubmit = (input) => {
    linkBlog({
      variables: {
        input: {
          id: currentUser.sub,
          ...input,
        },
      },
    })
  }

  return (
    <div>
      <Toaster />

      <Form
        className="mt-4 w-full"
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <FormError error={error} />

        <Label name="language" className="block text-sm text-gray-600 uppercase">
          Language Code
        </Label>
        <TextField
          name="language"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Label name="url" className="block text-sm text-gray-600 uppercase">
          Blog URL
        </Label>
        <TextField
          name="url"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Label name="apikey" className="block text-sm text-gray-600 uppercase">
          Blog API Key
        </Label>
        <TextField
          name="apikey"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default LinkBlogForm
