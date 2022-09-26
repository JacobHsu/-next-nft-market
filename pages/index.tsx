import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  Grid,
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  SvgIcon,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DarkTheme } from '@styles/theme/theme';

const Home: NextPage = () => {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {/* HERO SECTION */}
      <Container sx={{ mb: '100px' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={5}
        >
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              // pr: { xs: 0, md: '24px' },
              py: '24px',
            }}
          >
            <Box
              sx={{
                height: { xs: 'calc(100vh - 120px)', md: '100%' },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: { xs: 'absolute', md: 'relative' },
                  bottom: 0,
                }}
              >
                <Typography variant="h1">
                  Decentra&shy;lized Utility Driven NFTs
                </Typography>
                <Typography variant="body2" sx={{ mb: '32px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mb: '24px' }}
                >
                  Explore Marketplace
                </Button>
              </Box>
            </Box>
            <Grid
              container
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
              alignItems="center"
              spacing={{ xs: 4, md: 0 }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                py: { xs: '120px', md: '0' },
                pr: { xs: '0', md: '48px' },
              }}
            >
              <Grid
                item
                sx={{
                  // borderLeft: '1px solid rgba(144,144,144,0.5)',
                  flex: '1 1 auto',
                  position: 'relative',
                  textAlign: 'left',
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '3.5rem',
                      fontWeight: 'bold',
                      mb: { xs: '-12px', md: '-16px' },
                    }}
                  >
                    2
                  </Typography>
                  <Typography>Collections</Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  '&::before, ::after ': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    mt: '-10%',
                    height: '60%',
                    width: '1px',
                    background: { xs: 'none', md: 'rgba(144,144,144,0.2)' },
                  },
                  flex: '1 1 auto',
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '3.5rem',
                      fontWeight: 'bold',
                      mb: { xs: '-12px', md: '-16px' },
                    }}
                  >
                    3566
                  </Typography>
                  <Typography>NFTs</Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  '&::before, ::after ': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    mt: '-10%',
                    height: '60%',
                    width: '1px',
                    background: { xs: 'none', md: 'rgba(144,144,144,0.2)' },
                  },
                  flex: '1 1 auto',
                  position: 'relative',
                  textAlign: 'right',
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    display: 'inline-block',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '3.5rem',
                      fontWeight: 'bold',
                      mb: { xs: '-12px', md: '-16px' },
                    }}
                  >
                    60k+
                  </Typography>
                  <Typography>Active Users</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              height: upSm ? '800px' : '600px',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                background: '#000',
                borderRadius: '0 0 16px 16px',
              }}
            >
              <Image
                src="/images/cube1.png"
                layout="fill"
                objectFit="contain"
              />
              <Card
                sx={{
                  position: 'absolute',
                  bottom: '48px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(6px)',
                  color: DarkTheme.palette.text.primary,
                  borderRadius: '16px',
                  width: '400px',
                  maxWidth: '80vw',
                }}
              >
                <CardContent sx={{ p: '24px' }}>
                  <Grid container spacing={1} sx={{ mb: '16px' }}>
                    <Grid item>
                      <Typography sx={{ fontWeight: '600' }}>
                        Genesis
                      </Typography>
                      <Typography>by Ergopad</Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>Price</Typography>
                      <Typography sx={{ fontWeight: '600' }}>10 Erg</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Remaining</Typography>
                      <Typography sx={{ fontWeight: '600' }}>
                        153 cubes left
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#000',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: '#111',
                          },
                          width: '100%',
                        }}
                      >
                        Buy Cube
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: '14px',
                          backgroundColor: '#fff',
                          color: '#000',
                          '&:hover': {
                            backgroundColor: '#eee',
                          },
                          width: '100%',
                        }}
                      >
                        View Collection
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.tsx
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
