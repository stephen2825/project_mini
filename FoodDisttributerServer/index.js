import express, { request, response } from "express";
import mongoose from "mongoose";
import { userdb } from "./UsersRegistration.js";
import {Admin} from "./AdminLogin.js";
import { StatusCodes } from 'http-status-codes';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import cors from 'cors';





const app=express();
app.use(cors());
app.use(express.json());

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/distributer');
        console.log("Database connection created!");
    }
    catch (error){
        console.log(error);
    }
}

app.post("/newUser",async(request,response)=>{
    try {
        const reqData=request.body;
        const user=userdb(reqData);
        await user.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }
});

app.get("/newLogin",async(request,response)=>{
    try {
        const userR=await Admin.find();  
        response.send({Got:userR});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
    }
});

app.post("/newLogin", async (request, response) => {
    try {
      const reqData = request.body;
      const user = Admin(reqData); // Assuming userdb is your model for the "newLogin" collection
      await user.save();
      response.status(StatusCodes.CREATED).send({ message: INSERT_SUCCESS });
    } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
  });
  



app.get("/newUser",async(request,response)=>{
    try {
        const userR=await userdb.find();  
        response.send({Got:userR});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
    }
});



app.get("/newUser/:phoneNumber",async(request,response)=>{
    try {
       const user=await userdb.findOne({phoneNumber:request.params.phoneNumber});
       if (user==null) {
        response.status(StatusCodes.NOT_FOUND).send({message:STUDENT_NOT_FOUND});
       }
       else{
         response.send({userR:user});
       }
       
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.delete("/newUser/:name",async(request,response)=>{
    try {
        await userdb.deleteOne({phone:request.params.phone});
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.put("/newUser/:phone",async(request,response)=>{
    try {
        await userdb.updateOne({phone:request.params.phone},request.body);
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


app.post('/newUser/purchase', async (request, response) => {
    try {
      const { phoneNumber, purchase } = request.body;
  
      // Find the user by phone number
      const user = await userdb.findOne({ phoneNumber });
  
      // If the user is found, add the purchase to the purchases array
      if (user) {
        user.purchases.push(purchase);
        await user.save();
  
        response.status(StatusCodes.OK).send({ message: 'Purchase successful' });
      } else {
        response.status(StatusCodes.NOT_FOUND).send({ message: 'User not found' });
      }
    } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' });
    }
  });


app.get("/allPurchases", async (request, response) => {
    try {
        const purchases = await Purchase.find();
        response.send({ purchases });
    } catch (error) {
        console.error('Error fetching purchases:', error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});




app.listen(4990,()=>{
    console.log("Server has started on 4990 for distributor");
    connectDB();
});


