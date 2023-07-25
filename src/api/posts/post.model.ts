export interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

export interface GetAllPostsResponse {
   posts: Post[];
}

export interface PostService {
   getAllPosts: () => HttpPromise<GetAllPostsResponse>;
}
