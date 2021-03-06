import {
  useDefaultDemoLink,
  useDemoLinks,
  useFeatures,
  useSiteMetadata
} from 'components/hook'

import { marshall, unmarshall } from 'helpers'
import React, { useState, Fragment } from 'react'
import { navigate } from 'gatsby'

import {
  Text,
  ButtonSecondary,
  Box,
  Heading,
  Container as ContainerBase,
  Subhead,
  Banner,
  Hide,
  Flex,
  Link,
  Caps
} from 'components/elements'

import {
  DemoLinks,
  LiveDemo,
  PricingTable,
  Grid,
  Layout,
  MQLEditor
} from 'components/patterns'

import { List, ListItem } from 'components/patterns/List/List'

const FAQ = () => (
  <Box as='article'>
    <Container as='header' py={5}>
      <Flex
        as='header'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        pb={[4, 5]}
      >
        <Heading mt={4} fontSize={7} children='Frequently Asked Questions' />
        <Subhead mt={[2, 3]} color='black50' textAlign='center' maxWidth={8}>
          Your questions, answered
        </Subhead>
      </Flex>
    </Container>
  </Box>
)

const Pricing = ({ apiKey, stripeKey, apiEndpoint }) => (
  <Box as='article' id='pricing'>
    <Container as='section' pt={5} pb={0}>
      <Header
        children={[
          'Pricing',
          'From $0. ',
          <Subhead fontWeight='bold' as='span'>
            Pay as you grow.
          </Subhead>
        ]}
      />
      <PricingTable
        apiKey={apiKey}
        stripeKey={stripeKey}
        apiEndpoint={apiEndpoint}
      />
    </Container>
  </Box>
)

const Container = ({ children, maxWidth, ...props }) => (
  <Box as='article' px={4} pt={[4, 5]} pb={[4, 5]} {...props}>
    <ContainerBase children={children} maxWidth={maxWidth} />
  </Box>
)

const Header = ({ children }) => {
  const [title, ...caption] = children
  return (
    <Flex
      as='header'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      py={[2, 3]}
      px={0}
    >
      <Heading px={0} children={title} />
      <Subhead
        pt={[2, 0]}
        px={4}
        color='gray'
        textAlign='center'
        children={caption.map((child, index) => (
          <Fragment key={`${title}_${index}`}>{child}</Fragment>
        ))}
      />
    </Flex>
  )
}

const Announcement = ({ href, children, ...props }) => (
  <Flex justifyContent='center' {...props}>
    <Banner href={href}>{children}</Banner>
  </Flex>
)

const Hero = () => (
  <Fragment>
    <Hide breakpoints={[0, 1, 2]}>
      <Container id='hero'>
        <Header
          children={[
            'Turn websites into data',
            'Microlink makes easy to build an API on top of any website.'
          ]}
        />
        <Announcement
          href='/blog/product-brief-7/'
          children='Microlink SDK 4.0, Docs Portal & MQL »'
        />
      </Container>
    </Hide>

    <Hide breakpoints={[3]}>
      <Box pb={[4, 5]}>
        <Container id='hero' pb={0}>
          <Header
            children={[
              'Turn websites into data',
              'Microlink makes easy to build an API on top of any website.'
            ]}
          />
        </Container>
        <Announcement
          pt={2}
          href='/blog/product-brief-7/'
          children='Microlink SDK 4.0, Docs Portal & MQL »'
        />
      </Box>
    </Hide>
  </Fragment>
)

const Subheader = ({ children }) => (
  <Fragment>
    <Subhead fontSize={1} color='secondary'>
      <Caps as='span' children={children[0]} />
    </Subhead>
    <Heading mt={1} fontSize={[3, 4]} variant={null} children={children[1]} />
  </Fragment>
)

const SDK = ({ loading, editor, children, setDemoLink, siteUrl }) => (
  <Container
    maxWidth='100%'
    bg='pinky'
    id='sdk'
    borderColor='pinkest'
    borderTop='1px solid'
    borderBottom='1px solid'
  >
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      as='header'
    >
      <Subheader children={['SDK', 'Beautiful Link Previews']} />
      <Box px={4} textAlign={['inherit', 'center']}>
        <Text mt={4} mb={[4, 4, 4, 0]}>
          <Link>Microlink SDK</Link> converts your links into rich media.
        </Text>
        <Text>Make your content attractive, engaging better your links.</Text>
      </Box>
    </Flex>
    <Flex
      py={[4, 4, 4, 5]}
      px={[5, 5, 5, 0]}
      as='section'
      justifyContent='center'
      alignItems={['center', 'center', 'center', 'end']}
      flexDirection={['column', 'column', 'column', 'row']}
      mx='auto'
    >
      <Flex
        maxWidth={['100%', '100%', '100%', '23em']}
        justifyContent='center'
        flexDirection='column'
      >
        <Text
          maxWidth={['inherit', 'inherit', 'inherit', 8]}
          mt={[1, 1, 1, 3]}
          textAlign={['center', 'center', 'center', 'inherit']}
          children='Engage your content with enriched media.'
        />
        <List px={[3, 3, 3, 0]} mt={4} mb={3}>
          <ListItem children='Add it to an existing website or app.' />
          <ListItem children='Auto detection (image, video, audio) with media controls support.' />
          <ListItem children='Easily customizable.' />
        </List>
        <Flex
          alignItems='center'
          justifyContent={['center', 'center', 'center', 'end']}
          pb={[4, 4, 4, 0]}
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Hide breakpoints={[3]}>
            <LiveDemo loading={loading} children={editor} />
          </Hide>

          <ButtonSecondary
            onClick={() => navigate('/docs/sdk/getting-started/overview')}
          >
            <Caps fontSize={0}>See More</Caps>
          </ButtonSecondary>
        </Flex>
      </Flex>
      <Box mx={4} />
      <Hide breakpoints={[0, 1, 2]}>
        <LiveDemo loading={loading} children={editor} />
      </Hide>
    </Flex>
    <Flex
      as='section'
      justifyContent='center'
      alignItems='center'
      mx='auto'
      flexDirection='column'
    >
      <Text
        mb={2}
        pb={[3, 4]}
        fontSize={1}
        color='gray8'
        children='Try another link →'
      />
      <DemoLinks
        children={children}
        onClick={demoLink => {
          window.history.pushState(
            {},
            '',
            `${siteUrl}?${marshall({ url: demoLink.url })}`
          )
          setDemoLink(demoLink)
        }}
      />
    </Flex>
  </Container>
)

const MQL = () => (
  <Container
    maxWidth='100%'
    bg='pinky'
    id='sdk'
    borderColor='pinkest'
    borderTop='1px solid'
    borderBottom='1px solid'
  >
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      as='header'
    >
      <Subheader children={['MQL', 'Build APIs from websites']} />

      <Box px={4} textAlign={['inherit', 'center']}>
        <Text mt={4} mb={[4, 4, 4, 0]}>
          <Link>Microlink Query Language</Link> (MQL) is the most modern data
          interface for the web.
        </Text>
        <Text>Get structured data, from any website.</Text>
      </Box>
    </Flex>
    <Flex
      py={[4, 4, 4, 5]}
      px={[5, 5, 5, 0]}
      as='section'
      justifyContent='center'
      alignItems={['center', 'center', 'center', 'end']}
      flexDirection={['column', 'column', 'column', 'row']}
      mx='auto'
    >
      <Flex
        maxWidth={['100%', '100%', '100%', '23em']}
        justifyContent='center'
        flexDirection='column'
      >
        <Text
          maxWidth={['inherit', 'inherit', 'inherit', 8]}
          mt={[1, 1, 1, 3]}
          textAlign={['center', 'center', 'center', 'inherit']}
          children='Turns any website into a programmatic API.'
        />
        <List px={[3, 3, 3, 0]} mt={4} mb={3}>
          <ListItem children='Create data rules based on HTML markup.' />
          <ListItem children='Target any URL for getting specific content.' />
          <ListItem children='Builtin data validation & hydration.' />
        </List>
        <Flex
          alignItems='center'
          justifyContent={['center', 'center', 'center', 'end']}
          pb={[4, 4, 4, 0]}
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Hide breakpoints={[3]}>
            <MQLEditor />
          </Hide>

          <ButtonSecondary
            onClick={() => navigate('/docs/mql/getting-started/overview')}
          >
            <Caps fontSize={0}>See More</Caps>
          </ButtonSecondary>
        </Flex>
      </Flex>
      <Box mx={4} />
      <Hide breakpoints={[0, 1, 2]}>
        <MQLEditor />
      </Hide>
    </Flex>
  </Container>
)

const Features = ({ children }) => (
  <Container id='features'>
    <Header children={['Features', 'Capabilities under the hood.']} />
    <Box as='section' pt={[4, 5]}>
      <Hide breakpoints={[0, 1]}>
        <Grid children={children} itemsPerRow={3} />
      </Hide>
      <Hide breakpoints={[2, 3]}>
        <Grid children={children} itemsPerRow={1} />
      </Hide>
    </Box>
  </Container>
)

function Index () {
  const [demoLink, setDemoLink] = useState(useDefaultDemoLink().data)

  React.useEffect(() => {
    const { url } = unmarshall(window.location.search)
    if (url) setUrl(decodeURIComponent(url))
  }, [])

  const setUrl = url => {
    const newDemoLink = demoLinks.find(demoLink => demoLink.data.url === url)
    setDemoLink(newDemoLink)
  }

  const demoLinks = useDemoLinks()
  const {
    siteUrl,
    paymentApiKey,
    stripeKey,
    paymentEndpoint
  } = useSiteMetadata()

  return (
    <Layout>
      <Hero />
      <SDK
        children={demoLinks}
        setDemoLink={setDemoLink}
        siteUrl={siteUrl}
        editor={demoLink}
      />
      <Features children={useFeatures()} />
      <MQL />
      <Pricing
        apiKey={paymentApiKey}
        stripeKey={stripeKey}
        apiEndpoint={paymentEndpoint}
      />
      {/* <FAQ /> */}
    </Layout>
  )
}

export default Index
