import { useEffect } from 'react';
import qs from 'qs';
import PostList from '../../components/posts/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { listPosts } from '../../modules/posts';
import { withRouter } from 'react-router-dom';

const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    const { username } = match.parse;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);

  return (
    <PostList
      posts={posts}
      loading={loading}
      error={error}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostListContainer);
