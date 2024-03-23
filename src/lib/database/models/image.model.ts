

import { Schema,models, model } from "mongoose";   // let's create our first mongoose model

export interface Image extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string; // URL can be represented as a string for type purposes
    width?: number;
    height?: number;
    config?: Record<string, any>; // 'Object' type in mongoose schema can be represented as Record<string, any> in TypeScript for a flexible key-value pair object
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: string; // Assuming the ObjectId is represented as a string in TypeScript. If you are working directly with MongoDB objects, you might use some specific ObjectId type provided by a library like mongoose
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({   // let's define the schema for our model
    title: { type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: { type: String, required: true},
    secureUrl: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: String},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref:'User'}, 
    createdAt: {type:Date, default: Date.now},
    UpdatedAt: {type:Date, default: Date.now},

});


const Image = models?.Image || model('Image', ImageSchema); // let's turn our schema to a model for our app

export default Image;