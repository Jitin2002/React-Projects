import conf from "../conf/conf.js"
import {Client ,Account ,ID} from "appwrite"

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }
// promise  account create hone ke baad 
    async createAccout({email,passward,name}){
        // fail bhi ho skta ha --- so try catch use kra ha
        try { // wait kro account creatre hone ha 
            // unique id honi chiye phle 
            const userAccount = await this.account.create(ID.unique(),email,passward,name)
            if(userAccount){ // useraccount exit krata ha 
              //call another method  -- login bhi kra do 
              return this.login(email,passward) 

            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
            
        }
    }

    async login({email,passward}){
        try {
            return await this.account.createEmailPasswordSession(email,passward)
            
        } catch (error) {
            throw error

            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :getCurentUser::error",error)
            
        }
        return null; // kisi bhi thra se try catch me problem aa jyti ha tab bhi return null hoga
        
    }

    async logout(){ 
        try {
            return await this.account.deleteSessions()
            //deleteSessions -- delete krr dega sara sessions
        } catch (error) {
            console.log("Appwrite service:logout::error",error);
            
        }
    }
}

const authService = new AuthService(); 


export default authService
  
