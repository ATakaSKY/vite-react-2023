import { GetAllPostsResponse, PostService as IPostService } from 'api/posts/post.model';
import httpClient from 'common/http/httpClient';

const PostService = (): IPostService => {
   return {
      getAllPosts: (): HttpPromise<GetAllPostsResponse> => {
         return httpClient.get('/posts');
      }
   };
};

export default PostService();
