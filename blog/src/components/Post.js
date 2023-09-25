import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%',
}));

const StyledPostTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  textAlign: 'left',
}));

const StyledPostText = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  fontSize: '12px',
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));

const Post = (props) => {
  const { model } = props;

  return (
    <Card>
      <Link color="textPrimary" href={'post/' + model.id}>
        <StyledCardMedia image="https://source.unsplash.com/random" title="Image title" />
      </Link>
      <CardContent>
        <StyledPostTitle gutterBottom variant="h6" component="h2">
            {model.title.substring(0, 30)}
        </StyledPostTitle>

        <StyledPostText>
          <Typography color="textSecondary">{model.excerpt.substring(0, 50)}</Typography>
        </StyledPostText>
      </CardContent>
    </Card>
  );
};

export default Post;
