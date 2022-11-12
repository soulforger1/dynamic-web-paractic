import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Card } from "../component/card";
import { instance } from "./home-page";

export const PostPage = () => {
    const { postId } = useParams();
    const [data, setData] = useState({});
    const [comment, setComment] = useState({ data: [] });
    const [value, setValue] = useState('');

    const getPostData = async () => {
        const res = await instance.get(`/post/${postId}`)
        setData(res.data)
    }

    const getPostComment = async () => {
        const res = await instance.get(`/post/${postId}/comment`)
        setComment(res.data);
    }

    const postComment = async () => {
        // const res = await instance.post(`/comment/create`, {
        //     message: value,
        //     owner: "60d0fe4f5311236168a109cc",
        //     post: postId
        // })
        // const res = await axios({
        //     method: 'POST',
        //     baseURL: 'https://dummyapi.io/data/v1/comment/create',
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //         "app-id": "636a0100b23c1794f297d097"
        //     },
        //     data: {
        //         message: value,
        //         owner: "60d0fe4f5311236168a109cc",
        //         post: postId
        //     }
        // })

        // console.log(res);
    }

    useEffect(() => {
        getPostData()
        getPostComment()
    }, []);

    return (
        <div className="App">
            <Card text={data.text} image={data.image} tags={data.tags} firstName={data.firstName} />

            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={postComment}>comment</button>
            </div>

            {
                comment.data.map((cur) => <div>{cur}</div>)
            }
        </div>
    )
}