import { Grid, Container } from '@mui/material';
import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
  
          {posts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Post model={post} />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Posts;

