import React from 'react'
import { Typography, Box } from '@mui/material'
import Card from '@/components/careers/card'

const Jumbocards = () => {
    const openings =[
        {
            "type": "Engineering",
            "posts" : [
                {
                    "job": "Technical Architect",
                    "location": "Bangalore"
                },
                {
                    "job": "Senior Software Engineer",
                    "location": "Bangalore"
                },
                {
                    "job": "Machine learning Engineer",
                    "location": "Bangalore"
                },
            ]
        },
        {
            "type": "Sales",
            "posts": [
                {
                    "job": "Senior Sales Representative",
                    "location": "United States"
                },
                {
                    "job": "Senior Sales Representative",
                    "location": "Banglore"
                }
            ]
        }
    ]
  return (
    <>
        <Box sx={{ width: '100%', m: 15 }}>
            <Typography variant="lead" component="h2" textAlign='left' mt={3} gutterBottom>
                Openings in Avesha
            </Typography>
            <Typography variant="body1" gutterBottom>
                If you’d love to be part an innovative team building the next-gen framework for
                <br />
                disaggregated cloud applications, please consider joining us!
            </Typography>
            <Card datas={openings} />
        </Box>
    </>
  )
}

export default Jumbocards