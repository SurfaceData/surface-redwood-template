import { Box, Container, Flex } from '@chakra-ui/react'
import Navigation from 'src/components/nav/Navigation'
import SurfaceFooter from 'src/components/ui/SurfaceFooter'

const StandardLayout = ({ children }) => {
  return (
    <Flex direction="column" flex="1">
      <Box as="nav" role="navigation" bg="bg-accent">
        <Container maxW="full">
          <Box minH="20">Stuff</Box>
        </Container>
      </Box>
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
