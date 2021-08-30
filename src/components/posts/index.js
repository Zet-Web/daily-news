import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, clearPostById } from '../../store/actions';
import Moment from 'react-moment';
import Newsletter from '../utils/newsletter';
import { showToasts } from '../utils/tools';

const PostComponent = (props) => {
  const { id } = props.match.params;
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post.postById === '404') {
      showToasts('ERROR', 'The page  you request is not available');
      props.history.push('/');
    }
  }, [post, props.history]);

  useEffect(() => {
    return () => {
      dispatch(clearPostById());
    };
  }, [dispatch]);

  console.log(post);
  return (
    <>
      {post.postById && (
        <div className='article_container'>
          <h1>{post.postById.title}</h1>
          <div
            className='image'
            style={{
              background: `url(${post.postById.imagexl})`,
            }}
          >
            {' '}
          </div>
          <div className='author'>
            Created by:
            <span>{post.postById.author} - </span>
            <Moment format={'DD MMMM'}>{post.postById.createdAt}</Moment>
          </div>
          <div className='mt-3 content'>
            <div
              dangerouslySetInnerHTML={{
                __html: post.postById.content,
              }}
            />
          </div>
        </div>
      )}

      <Newsletter />
    </>
  );
};

export default PostComponent;
