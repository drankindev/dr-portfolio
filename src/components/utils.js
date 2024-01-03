import { generateClient } from "aws-amplify/api";
import { listPages } from '../graphql/queries';
//import { getUrl, list } from 'aws-amplify/storage';
import { Cache } from 'aws-amplify/utils';
import dayjs from 'dayjs';

const client = generateClient();

export const fetchPages = async ({onSuccess}) => {
    // get Pages from cache
    let PagesFromCache = await Cache.getItem('Pages');
    if (PagesFromCache !== null && PagesFromCache.length > 1000) {
      // return cached Pages
      onSuccess(PagesFromCache);
    } else {
      try {
        // get Pages from api if not cached
        const apiData = await client.graphql({ query: listPages });
        const PagesFromAPI = apiData.data.listPages.items ?? [];
        console.log('data', apiData);
        // cache Pages for 1 week
        const expiration = dayjs(new Date()).add(1, 'd');
        Cache.setItem('Pages', PagesFromAPI, { expires: expiration.valueOf() });
        
        // return api Pages
        onSuccess(PagesFromAPI);
      } catch (err) {
          console.log(err);
      }
    }
}

// export const fetchPostList = async ({onSuccess, status}) => {
//   // get posts from cache
//   let PostsFromCache = await Cache.getItem('posts');
//   if (PostsFromCache !== null && status !== 'refresh' && PostsFromCache.length > 0) {
//     // return cached posts
//     onSuccess(PostsFromCache);
//   } else {
//     try {
//       const apiData = await client.graphql({ 
//         query: listPosts
//       });
//       const PostsFromAPI = apiData.data.listPosts.items;

//       // cache posts for 10 minutes
//       const expiration = dayjs(new Date()).add(10, 'm');
//       Cache.setItem('posts', PostsFromAPI, { expires: expiration.valueOf() });
      
//       // return posts from api
//       onSuccess(PostsFromAPI);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// export const fetchPost = async ({postId, onSuccess, status}) => {
//   // get post from cache
//   let PostFromCache = await Cache.getItem(postId);
//   if (PostFromCache !== null && status !== 'refresh') {
//     // return cached post
//     onSuccess(PostFromCache);
//   } else {
//     try {
//       const apiData = await client.graphql({ 
//         query: getPost,
//         variables: { id: postId }
//       });
//       const PostFromAPI = apiData.data.getPost;

//       // cache post for 10 minutes
//       const expiration = dayjs(new Date()).add(10, 'm');
//       Cache.setItem(postId, PostFromAPI, { expires: expiration.valueOf() });

//       // return post from api
//       onSuccess(PostFromAPI);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// export const validateImage = async ({onSuccess,filename}) => {
//   try {
//     const validUrl = await list({
//       prefix: filename
//     });
//     if (validUrl.items.length > 0) {
//       const res = await getUrl({
//         key: filename,
//         options: {
//           accessLevel: 'public',
//         }
//       });
//       if (onSuccess && res.url) {
//         onSuccess(res.url.toString());
//       }
//     }
//   } catch (err) {
//     console.log('error',err);
//   }
// }
  