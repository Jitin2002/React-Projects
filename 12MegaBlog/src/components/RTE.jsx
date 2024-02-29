import React from "react";
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from 'react-hook-form'


export default function RTE({name,control,label ,defaultVlaue = ""}){


    return (
       

        <div className="w-full ">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller 
            name={name || 'conent'}
            control={control}
            render={ ({field : {onChange}}) => (

                <Editor 
                initialValue="default value"
                init={
                    {branding:false,
                    initialValue:{defaultVlaue},
                    height:500,
                    menubar:true,
                    plugins:[
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                       " visualblocks",
                       "code",
                       "fullscreen",
                       "insertdatetime",
                       "media",
                       "table",
                       "code",
                       "wordcount",
                       "anchor",

                ],
                toolbar :'undo redo | fromatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjutify | \
                bullist numlist outdent indent | removeformat | help ',
                content_style : "body {font-family:Helvetica,Arial,sans-serif; font-size:px }"
                }
                }
                onEditorChange={onChange}
                />

            )} // field prr tracking --- is filed pr kuch bhi change hota ha to inform krr dena
            />
        </div>



    )

}