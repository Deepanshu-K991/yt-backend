import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

    videoFile:{
        type: String, // CLOUDINARY URL
        required:true

    },

     thumbnail:{
        type: String, // CLOUDINARY URL
        required:true

    },

     title:{
        type: String,
        required:true

    },

     description:{
        type: String, 
        required:true

    },

     duration:{
        type: Number, // CLOUDINARY URL
        required:true

    },
     views:{
        type: Number, // CLOUDINARY URL
        default:0

    },
     isPublished:{
        type: Boolean, // CLOUDINARY URL
        default:true

    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoSchema)