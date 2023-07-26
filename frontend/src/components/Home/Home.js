import React, { useEffect, useState } from 'react'
import {
  Container, 
  Grow,
  Grid,
  Paper
} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'
import Paginate from '../Pagination'
import Posts from '../../components/Posts/Posts'
import Form from '../../components/Form/Form'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  // const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  },[currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid 
          container justifyContent='space-between' 
          alignItems='stretch' 
          spacing={3}
        >
          {/* SHOW THE POSTS */}
          <Grid item xs={12} sm={7}> 
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={4}>
            {/* FORM TO ADD A NEW POST */}
            <Form currentId={currentId} setCurrentId={setCurrentId} />

            <Paper elevation={6}>
              <Paginate />
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Grow>
  )  
}

export default Home
