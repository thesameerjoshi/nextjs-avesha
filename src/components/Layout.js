import Banner from "@/components/Banner"
import { Box, Container } from "@mui/material"

const Layout = ({children}) => {
  return (
    <>
        <Banner />
      <Container>
        <Box sx={{ height: '100vh' }}>
          {children}
        </Box>
      </Container>
    </>
    
  )
}

export default Layout