import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  Label,
  CheckboxField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { Panel } from 'rsuite'

import { QUERY as FindLinkedBlogQuery } from 'src/components/LinkedBlogCell'

const SYNC = gql`
  mutation SyncBlog($userId: String!, $input: CreateSyncedBlogInput!) {
    createSyncedBlog(userId: $userId, input: $input) {
      id
    }
  }
`

const SyncBlogForm = ({ synckey, language }) => {
  const formMethods = useForm()
  const { currentUser } = useAuth()
  const [syncBlog, { loading, error }] = useMutation(SYNC, {
    onCompleted: (result) => {
      //formMethods.reset()
    },
    refetchQueries: [
      {
        query: FindLinkedBlogQuery,
        variables: { userId: currentUser?.sub || '' },
      },
    ],
  })
  const onSubmit = (input) => {
    syncBlog({
      variables: {
        userId: currentUser.sub,
        input: input,
      },
    })
  }


  return (
    <Panel bordered header="Sync your blog with us">
      <div>
        <ol>
          <li>
            Copy the sync URL in your blog
            <div>{`${window.location}api/${synckey}`}</div>
          </li>
        </ol>
        <Form
          className="mt-4 w-full"
          onSubmit={onSubmit}
          error={error}
          formMethods={formMethods}
        >
          <Label
            name="syncDone"
            className="block text-sm text-gray-600 uppercase"
          >
            Confirm that your blog is synced with us
          </Label>
          <CheckboxField name="syncDone" />

          <Label
            name="syncSkipped"
            className="block text-sm text-gray-600 uppercase"
          >
            Skip syncing your blog with us
          </Label>
          <CheckboxField name="syncSkipped" />

          <Submit className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50">
            Submit
          </Submit>
        </Form>
      </div>
    </Panel>
  )
}

export default SyncBlogForm
