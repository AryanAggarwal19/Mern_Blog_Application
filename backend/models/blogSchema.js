import mongoose from "mongoose";

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLenghth:[10,"Blog title must contain atleast 10 characters!"],
        maxLenghth:[40,"Blog title must contain atleast 40 characters!"],
    },
    mainImage:{
        public_id:{
            type:String,
            required: true,
        },
        url:{
            type:String,
            required: true,
        },
    },
    intro:{
        type: String,
        required: true,
        minLenghth:[250,"Blog intro must contain atleast 250 characters!"],
    },
    paraOneImage:{
        public_id:{
            type:String,
            
        },
        url:{
            type:String,
           
        },
    },
    paraOneDescription:{
        type:String,
        minLenghth:[50,"Blog intro must contain atleast 50 characters!"],
    },
    paraOneTitle:{
        type:String,
        minLenghth:[50,"Blog title must contain atleast 50 characters!"],
    },
    paraTwoImage:{
        public_id:{
            type:String,
            
        },
        url:{
            type:String,
           
        },
    },
    paraTwoDescription:{
        type:String,
        minLenghth:[50,"Blog intro must contain atleast 50 characters!"],
    },
    paraTwoTitle:{
        type:String,
        minLenghth:[50,"Blog title must contain atleast 50 characters!"],
    },
    paraThreeImage:{
        public_id:{
            type:String,
            
        },
        url:{
            type:String,
           
        },
    },
    paraThreeDescription:{
        type:String,
        minLenghth:[50,"Blog intro must contain atleast 50 characters!"],
    },
    paraThreeTitle:{
        type:String,
        minLenghth:[50,"Blog title must contain atleast 50 characters!"],
    },
    category:{
        type:String,
        required:true
    },
    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    authorAvatar:{
        type:String,
        required:true,
    }
});

export const Blog= mongoose.model("Blog",blogSchema);