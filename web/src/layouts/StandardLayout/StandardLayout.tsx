import { Box, Container, Flex, Image } from '@chakra-ui/react'
import { Link } from '@redwoodjs/router'
import { Navigation } from '@surfacedata/sd-components'

import SurfaceFooter from 'src/components/ui/SurfaceFooter'

const StandardLayout = ({ children }) => {
  return (
    <Flex direction="column" flex="1" h="100vh">
      <Navigation
        avatar={<></>}
        logo={
          <Link href="/">
            <Image src="/svg/surface-data.svg" />
          </Link>
        }
      />
      <Flex as="main" role="main" direction="column" flex="1" py="16">
        <Container flex="1" maxW="full">
          {children}
        </Container>
      </Flex>
      <SurfaceFooter />
    </Flex>
  )
}

export default StandardLayout
