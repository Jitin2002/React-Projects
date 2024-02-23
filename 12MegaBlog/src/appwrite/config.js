import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client);
        this.bucket =new Storage(this.client);
          
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {
                  title,
                  content,
                  featuredImage,
                  status,
                  userId
                }
            )
        } catch (error) {
            console.log("Appwrite service ::createPost::error",error)
            
        }

    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,
             conf.appwriteCollectionID,
             slug,
             {
                title,
                content,
                featuredImage,
                status

             }
            )
            
        } catch (error) {
            console.log("appwrite service :updatePost::error",error)
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
             conf.appwriteDatabaseId,
             conf.appwriteCollectionID,
             slug
            )
            return true  // delete ho gya ha
            
        } catch (error) {
            console.log("Appwrite services ::deletePsot::error",error)
            return false // error aa gya ha
            
        }
    }

    // single post lena haa to 
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug  
            )
        } catch (error) {
            console.log("Appwrite services ::getPost::error",error)

            return false
            
        }
    }

    // sara document chiye to --- listDocuments krr do 
    // only vo document chiye jinka status active h 
    // Queries ---- 
    //Query.select(["name","title"])
    //Query.equal("title",["Iron man"])
    // Query.notEqual("title",["Iron Man"])

    // index bna ni pde ge appwrite me articles me tabh hi query laga skte ha
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                queries,
                 
            )
            
        } catch (error) {
            console.log("Appwrite services ::getPosts ::error",error);
            return false
            
        }
    }

    // file upload service  *****************

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )            
        } catch (error) {
            console.log("Appwrite service ::uploadFile::error",error);
            return false            
        }
    }

    async deleteFile(fileID){  // featuredImage me fileId hi dange 
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID

            )
            return true
            
        } catch (error) {
            console.log("Appwrite service : deleteFile::error",error);
            return false
            
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }
}

const service = new Service();

export default service

