import PostForm from "../components/PostForm.jsx";
import { createPost } from "../posts";
import { redirect, useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();

  await createPost(Object.assign({ id: 0 }, Object.fromEntries(formData)));

  return redirect("/");
}

export default function NewPost() {
  const navigate = useNavigate();

  const handlerCloseClick = () => {
    navigate(-1);
  };

  return (
    <article className="page">
      <PostForm method="post" submitBtnLabel="Опубликовать" onCloseClick={handlerCloseClick} />
    </article>
  );
}
