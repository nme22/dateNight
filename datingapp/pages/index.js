import Head from 'next/head';
import Link from 'next/link';
import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <VStack>
          <Head>
            <title>DateNight | Home</title>
            <meta name="keywords" content="DateNight" />
          </Head>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Button
              d="block"
              w="150px"
              p="8px"
              m="30px"
              bg="palevioletred"
              borderradius="4px"
              color="white"
              text-align="center"
              _hover={{
                bg: 'turquoise',
              }}
              onClick={() => signOut()}
            >
              Sign out
            </Button>
            <Heading
              fontSize={48}
              textColor="palevioletred"
              p="2"
              textAlign="center"
              fontFamily="Nunito"
              fontWeight="Bold"
              bgGradient="linear(to-r, red.300, blue.400 )"
              bgClip="text"
            >
              DateNight
            </Heading>
            <Heading
              fontSize={40}
              textColor="palevioletred"
              p="2"
              textAlign="center"
              fontFamily="Nunito"
              fontWeight="Bold"
              bgGradient="linear(to-r, red.300, blue.400 )"
              bgClip="text"
            >
              Signed in as {session.user.email} <br />
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <Heading
              textColor="palevioletred"
              p="2"
              fontSize={27}
              textAlign="center"
              fontFamily="Nunito"
              fontWeight="Bold"
              bgGradient="linear(to-r, red.300, blue.400 )"
              bgClip="text"
            >
              "Where moments become memories"
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <Text
              fontFamily="Nunito"
              pb="20"
              fontSize="2xl"
              bgGradient="linear(to-r, red.300, blue.400 )"
              bgClip="text"
              fontSize="2xl"
            >
              Don't Pencilvester your memories; remember the barbaque. Plan out
              your dates, send an invitation, and record your experience!{' '}
            </Text>
          </motion.div>
          <Link href="/About">
            <Button
              d="block"
              w="150px"
              p="8px"
              m="30px"
              bg="palevioletred"
              borderradius="4px"
              color="white"
              text-align="center"
              _hover={{
                bg: 'turquoise',
              }}
            >
              About DateNight
            </Button>
          </Link>
        </VStack>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        d="block"
        w="150px"
        p="8px"
        m="30px"
        bg="palevioletred"
        borderradius="4px"
        color="white"
        text-align="center"
        _hover={{
          bg: 'turquoise',
        }}
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </>
  );
}
