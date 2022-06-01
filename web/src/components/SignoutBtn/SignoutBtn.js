import { useTranslation } from 'react-i18next'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const SignoutBtn = () => {
  const { t } = useTranslation()
  const { logOut } = useAuth()

  const onClick = async () => {
    await logOut()
    navigate(routes.home())
  }

  return (<button onClick={() => onClick()}>{t('Navigation.signout')}</button>)
}

export default SignoutBtn
