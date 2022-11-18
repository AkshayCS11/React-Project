import React,{ useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './Posts.css';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // const user = JSON.parse(localStorage.getItem('profile'));
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return 'No posts';

  return (
    user? (
    // (user?.result?.isAdmin === true) &&(
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )):(
      <div id="grid">
      <h1 id="heading" align='center'>WELCOME TO OUR DATA MANAGEMENT APPLICATION</h1>
      <br/><br/>
      <div id="allcontent">
      <img id="homepageimage" src="./Homepagepic.png"/>
      <div id="content">
      <p className="content1"> A PLATFORM FOR MANAGING DATA OF </p>
      <p className="content2"> EMPLOYEES AND CUSTOMERS</p>
      <p className="content3"> CREATE AND PUBLISH PROJECTS</p>
      </div>
      </div>
      </div>
    // )
    )
  );
};

export default Posts;
