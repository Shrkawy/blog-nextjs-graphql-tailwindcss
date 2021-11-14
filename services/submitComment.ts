import { Comment } from "../types";

interface Response {
  message: string;
  success: boolean;
}

export const submitComment = async (comment: Comment): Promise<boolean> => {
  let res;
  try {
    res = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
  }

  return res.ok;
};
