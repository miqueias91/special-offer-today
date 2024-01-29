import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'

interface ContentPageProps {
    title: string
    primaryBgColor: string
    primaryColor: string
    linkProduct: string
}

export default function ContentPage({
    title,
    primaryBgColor,
    primaryColor,
    linkProduct,
  }: ContentPageProps) {
  return (
    <Box sx={{textAlign: 'center'}} paddingBottom={4}>
        <Grid container>
            <Grid item md={12}>
                <Box bgcolor={primaryBgColor} color={primaryColor}  py='3rem' px='0.5rem'>
                    <Typography component='h1' sx={{fontSize: '1.875rem', fontWeight: '700', textShadow: '1px 3px 4px rgb(0 0 0 / 50%)', lineHeight: '3.438rem', padding: '1.563rem'}}>
                        {title}
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={12}>
                <Box py='1.5rem' px='0.5rem'>
                    <Typography component='h2' sx={{fontSize: '1.5rem', fontWeight: '500', textShadow: '1px 3px 4px rgb(0 0 0 / 50%)', lineHeight: '3.438rem', padding: '1.563rem'}}>
                        Please select your gender
                    </Typography>
                </Box>
            </Grid>   
        </Grid>   
        <Grid container sx={{textAlign: '-webkit-center'}}>         
            <Grid item sm={12}>
                <Link href={linkProduct}>
                    <Image
                        src="/img/gender.jpg"
                        width={500}
                        height={400}
                        alt="Picture of the author"
                        />
                </Link>
            </Grid>
        </Grid>
    </Box>
  )
}