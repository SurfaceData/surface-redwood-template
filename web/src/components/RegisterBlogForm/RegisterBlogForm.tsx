import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  Label,
  RadioField,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'


const RegisterBlogForm = () => {
  const formMethods = useForm()
  const { currentUser } = useAuth()
  const onSubmit = (input) => {
    console.log(input)
  }

  return (
    <div>
      <Toaster />

      <Form
        className="mt-4 w-full"
        onSubmit={onSubmit}
        formMethods={formMethods}
      >
        <FormError />

        <Label name="url" className="block text-sm text-gray-600 uppercase">
          Blog URL
        </Label>
        <TextField
          name="url"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Label name="username" className="block text-sm text-gray-600 uppercase">
          Username
        </Label>
        <TextField
          name="username"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Label name="password" className="block text-sm text-gray-600 uppercase">
          Password
        </Label>
        <TextField
          name="password"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Label name="language" className="block text-sm text-gray-600 uppercase">
          Language Code
        </Label>
        <TextField
          name="language"
          className="block w-full p-1 border roudned text-xs"
          validation={{ required: true }}
        />

        <Label name="licensePool" className="text-sm text-gray-600 uppercase">
          Creative Commons Non Commercial
        </Label>
        <RadioField name="licensePool" value="cc-nc" />

        <br />

        <Label name="licensePool" className="text-sm text-gray-600 uppercase">
          Creative Commons Public Domain
        </Label>
        <RadioField name="licensePool" value="cc-0" />

        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default RegisterBlogForm
