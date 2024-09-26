import Button from "react-bootstrap/Button";
import PostCard from "../components/PostCard.jsx";
import PostForm from "../components/PostForm.jsx";
import { deletePost, getPost, updatePost } from "../posts";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params, request }) {
  const formData = await request.formData();

  await updatePost(params.id, Object.assign({ id: params.id }, Object.fromEntries(formData)));

  return { ok: true };
}

// eslint-disable-next-line react-refresh/only-export-components
export async function destroyAction({ params }) {
  await deletePost(params.id);

  return redirect("/");
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const post = await getPost(params.id);

  return { post };
}

export default function Post() {
  const { post } = useLoaderData();
  const [isEdit, setIsEdit] = useState(false);

  const handlerCloseClick = () => {
    setIsEdit(false);
  };
  const handlerDestroySubmit = (event) => {
    if (!confirm("Подтвердите, пожалуйста, что вы хотите удалить эту запись.")) {
      event.preventDefault();
    }
  };
  const handlerEditClick = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    handlerCloseClick();
  }, [post]);

  return (
    <article className="page">
      {
        isEdit
          ? <PostForm method="put" post={post} submitBtnLabel="Сохранить" onCloseClick={handlerCloseClick} />
          : (
              <>
                <PostCard post={post} />
                <Button variant="primary" onClick={handlerEditClick}>Изменить</Button>
                <Form action="destroy" className="d-grid" method="delete" onSubmit={handlerDestroySubmit}>
                  <Button type="submit" variant="danger">Удалить</Button>
                </Form>
              </>
            )
      }
    </article>
  );
}
