import axios from 'axios';
const BASE_URL = 'http://localhost:3004';

export const getPosts = async (
  prevState,
  page = 1,
  order = 'asc',
  limit = '10'
) => {
  try {
    //getPosts(1, 'desc', 6));
    // http://localhost:3004/posts?_page=1&_limit=6&_order=desc&_sort=id
    const response = await axios.get(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
    );

    return {
      posts: prevState.posts
        ? [...prevState.posts, ...response.data]
        : response.data,
      page: page,
      end: response.data.length === 0,
    };
  } catch (e) {
    throw e;
  }
};

export const addNewsletter = async (data) => {
  try {
    const findUser = await axios.get(
      `${BASE_URL}/newsletter?email=${data.email}`
    );
    if (!Array.isArray(findUser.data) || !findUser.data.length) {
      // add user
      const response = await axios({
        method: 'POST',
        url: `${BASE_URL}/newsletter`,
        data: {
          email: data.email,
        },
      });
      return {
        newsletter: 'added',
        email: response.data,
      };
    } else {
      // already on the db
      return {
        newsletter: 'failed',
      };
    }
  } catch (e) {
    throw e;
  }
};
