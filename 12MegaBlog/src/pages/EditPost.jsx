import React from "react";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container , PostForm } from "../components";
import appwriteService from "../appwrite/config"

function EditPost () {

    const [post,setPosts] =useState(null)

    const  {slug} = useParams() // url se nikl ne ha to useParam (-- ise nikle ga)
    const navigate = useNavigate()

    useEffect ( () => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                setPosts(post)
            })

        }
        else {
            navigate ('/')
        }

    },[slug ,navigate])

    return post ? (
        <div className="py-8 ">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>

    ) : null
}

export default EditPost