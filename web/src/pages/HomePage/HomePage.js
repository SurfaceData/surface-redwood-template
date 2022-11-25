import { useLazyQuery } from '@apollo/client'
import { Image } from '@chakra-ui/react'
import { Button } from '@surfacedata/sd-components'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useState } from 'react'
import { Trans } from 'react-i18next'

const QUERY = gql`
  query StableDiffusion {
    generateImage {
      id
      content
    }
  }
`

const HomePage = () => {
  const [generateImage, { loading, error, data }] = useLazyQuery(QUERY)

  const { isAuthenticated, currentUser, hasRole } = useAuth()
  const [images, setImages] = useState([])

  const onClick = () => {
    generateImage()
  }
  return (
    <>
      {isAuthenticated ? (
        <div>
          <Trans i18nKey="homeAuthenticated">Authenticated View</Trans>
        </div>
      ) : (
        <div>
          <Button onClick={onClick}>cats</Button>
          <Trans i18nKey="homeUnauthenticated">Unauthenticated View</Trans>
          {data &&
            data.generateImage.map(({ id, content }) => (
              <Image key={id} src={content} />
            ))}
        </div>
      )}
    </>
  )
}

export default HomePage
