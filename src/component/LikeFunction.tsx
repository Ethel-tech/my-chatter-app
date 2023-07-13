import { ThumbUp } from "@mui/icons-material";
import React, { useState } from "react"



export default function LikeFunction() {
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () =>{
        setLike(isLiked ? like - 1: like + 1)
        setIsLiked(!isLiked)
    };
    return (
    <>
    <ThumbUp
    htmlColor="blue"
    className="likeIcon"
    onClick={likeHandler}
    />
    </>
  )
}
