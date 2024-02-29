import React from "react";

import { useCallback } from "react";
import {useForm} from "react-hook-form"
import {Button ,Input,Select,RTE} from "../index"
import appwriteService from "../../appwrite/config";
import { UseDispatch ,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostForm ({post}) {
    const {register, handleSubmit,watch,setValue,control,getValues} = useForm({
        defaultValues :{
            title : post?.title || "", // post ka title ha to use krr lo nhi empty de do 
            slug: post?.slug || '',
            content :post?.content || '',
            status :post?.status || 'active',

        }
    })

    const navigate = useNavigate ()
    const userData = useSelector((state) => state.user.userData)

    const submit = async (data) => {
        if(post) {
           const file = data.image[0]?appwriteService.uploadFile(data.image[0]) : null

           if(file) {
            appwriteService.deleteFile(post.featuredImage)
           }
           const dbPost =await appwriteService.updatePost(post.$id , {
            ...data,
            featuredImage :file ? file.$id : undefined})

            if(dbPost){ 
            navigate(`/post/${dbPost.$id}`)
            }

        }

        else {
            const file = await appwriteService.uploadFile(data.image[0])

            if(file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost ({
                    ...data,
                    userId : userData.$id 
                })

                if(dbPost) {
                    navigate (`/post/${dbPost.$id}`) // redirect bhi krra do 
                }
            }
        }
    }

    const SlugTransform = useCallback ( (value) => {
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')  //  regexp (chatgpt)   ^ negate --inko chod ke baki sab match krr diya a-z A-Z d(means digit)     s (spaces)
            .replace(/\s/g,'-')  // space ko globally replace krr do - 
           
        }
        return ''  // empty string return kr do agar vo nhi ha to
    },[])

    React.useEffect(() => {

        const subscription = watch ((value,{name}) => {
            if(name === 'title') {
                setValue('slug',SlugTransform(value.title,
                    {shouldValidate : true}))
            }
        })


        return () => {
            subscription.unsubscribe()  // memory management  -- optimized  --khud hi baar bar ghum ta na re jye
        }

    },[watch ,SlugTransform ,setValue])


    return (

        <form onSubmit={handleSubmit(submit)}
        className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input 
                label = 'Title :'
                placeholder = 'Title'
                className="mb-4"/>
                {...register('title',{
                    required:true
                })}

           
                <Input 
                lable ="Slug"
                 placeholder="Slug"
                 className ="mb-4"
                 {...register("slug" , {
                     required:true
                 })}
                 onInput ={ (e) => {
                     setValue("slug",SlugTransform(e.currentTarget.value),
                     {shouldValidate :true});
                 }}
                />
                <RTE label= 'Content :' name ="content" 
                 control={control} defaultVlaue={getValues('content')}
                 />
            </div>

            <div className="w-1/3 px-2">
                <Input  
                label = "Featured Image :"
                type ="file"
                className ="mb-4"
                accept = "image/png, image/jpg , image/jpeg , image/gif"
                {...register("image",{required:!post})}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img 
                        src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title}
                        className="rounded-lg" 
                        />
                    </div>
                )}
                <Select 
                    options = {['active' ,'inactive']}
                    label ="Status"
                    className ="mb-4"
                    {...register('status',{required:true})}

                />

                <Button 
                type='submit'
                bgColor={post ?"bg-green-500":undefined}
                className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>           
                
            </div>
        </form>
        
    )
}
 