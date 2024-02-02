import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'

interface ContentPageSecondProps {
    titleProduct: string
    title: string
    primaryBgColor: string
    bgColor: string
    primaryColor: string
    linkProduct: string
    pathImg: string
}

export default function ContentPageSecond({
    titleProduct,
    title,
    primaryBgColor,
    bgColor,
    primaryColor,
    linkProduct,
    pathImg,
  }: ContentPageSecondProps) {
  return (
    <Box sx={{textAlign: 'center'}} paddingBottom={4} bgcolor={bgColor}>
        <Grid container>
            <Grid item md={12}>
                <Box bgcolor={primaryBgColor} color={primaryColor}  py='1rem' px='0.5rem'>
                    <Typography component='h1' sx={{fontSize: '1.875rem', fontWeight: '700', textShadow: '1px 3px 4px rgb(0 0 0 / 50%)', lineHeight: '3.438rem', padding: '1.563rem'}}>
                        {title}
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={12}>
                <Box>
                    <Typography component='h2' sx={{fontSize: '1.5rem', fontWeight: '500', textShadow: '1px 3px 4px rgb(0 0 0 / 50%)', lineHeight: '3.438rem', padding: '1.563rem'}}>
                        {titleProduct}
                    </Typography>
                </Box>
            </Grid>   
        </Grid>   
        <Grid container sx={{textAlign: '-webkit-center'}}>         
            <Grid item sm={12}>
                <Link href={linkProduct}>
                    <Image
                        src={pathImg}
                        width={900}
                        height={400}
                        alt="Picture of the author"
                        />
                </Link>
            </Grid>
        </Grid>
    </Box>
  )
}