import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  PasswordField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'

const UpdatePasswordForm = () => {
  const { client } = useAuth()
  const formMethods = useForm()
  const onSubmit = async (input) => {
    const { user, error } = client.auth.update({
      password: input.newPassword
    })
    if (error) {
      toast.success('Thank you for linking your blog')
    } else {
      toast.success('Email Updated')
      formMethods.reset()
    }
  }

  return (
    <div>
      <Toaster />

      <Form
        className="mt-4 w-full"
        onSubmit={onSubmit}
        formMethods={formMethods}
      >
        <Label name="newPassword" className="block text-sm text-gray-600 uppercase">
          New Password 
        </Label>
        <PasswordField
          name="newPassword"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Update Password
        </Submit>
      </Form>
    </div>
  )
}

export default UpdatePasswordForm
