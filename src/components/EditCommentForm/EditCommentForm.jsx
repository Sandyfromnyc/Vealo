import CommentCard from "../CommentCard/CommentCard";
import { useState } from 'react';

export default function EditCommentForm({handleUpdateComment, commentId}) {
  const [updateCommentItem, setUpdateCommentItem] = useState();

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateComment(updateCommentItem, commentId)
  }


}