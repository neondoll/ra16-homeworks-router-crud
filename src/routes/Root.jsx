import Alert from "react-bootstrap/Alert";
import PostCard from "../components/PostCard";
import { getPosts } from "../posts";
import { Link, useLoaderData } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const posts = await getPosts();

  return { posts };
}

export default function Root() {
  const { posts } = useLoaderData();

  return (
    <article className="page">
      <Link className="btn btn-primary" to="/posts/new">Создать пост</Link>
      {
        posts.length
          ? posts.map(post => <PostCard key={post.id} post={post} to={`/posts/${post.id}`} />)
          : <Alert className="page__alert" variant="light">Нет постов</Alert>
      }
    </article>
  );
}
