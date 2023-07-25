import { useEffect } from 'react';
import { Post as PostModel } from 'api/posts/post.model';
import useGetPosts from 'hooks/useGetAllPosts';

const Post = () => {
   const { getPosts, posts, loading, error } = useGetPosts();

   useEffect(() => {
      getPosts();
   }, []);

   const postContent = () => {
      if (loading) {
         return <div>Loading...</div>;
      }
      if (error) {
         return <div>Error...</div>;
      }

      return posts?.map((post: PostModel) => <div key={post.id}>{post.title}</div>);
   };

   return postContent();
};

export default Post;
