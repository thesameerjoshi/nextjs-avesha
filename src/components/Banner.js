import React from 'react'
import {Box, Collapse, IconButton, Button, Alert} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Banner = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Box sx={{ bgcolor: '#FFD7CE', width: '100%', mt: 1, }} varient="filled">
        <Collapse in={open}>
          <Alert severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ bgcolor: '#FFD7CE' }}
          >
            Latest: Avesha Open Sources KubeSlice, a Unified Platform for Managing Multi-Tenancy and Multi-Cluster Kubernetes
          </Alert>
        </Collapse>
      </Box>
    </>
  )
}

export default Banner