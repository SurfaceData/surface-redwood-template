import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'

const SurfaceFooter = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
      maxW="full"
    >
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            <img
              alt="Creative Commons License"
              height={31}
              width={88}
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
            />
          </a>

          <ButtonGroup variant="outline">
            <IconButton
              as="a"
              target="_"
              isRound="true"
              href="https://blog.surfacedata.org/"
              aria-label="Blog"
              icon={<ImBlog fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              target="_"
              isRound="true"
              colorScheme="blackAlpha"
              href="https://github.com/SurfaceData/"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              target="_"
              isRound="true"
              colorScheme="twitter"
              href="https://twitter.com/SurfaceData"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="xs" color="subtle" w="64">
          This work is licensed under a{' '}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            Creative Commons Attribution-NonCommercial 4.0 International License
          </a>
          .
        </Text>
      </Stack>
    </Container>
  )
}

export default SurfaceFooter
