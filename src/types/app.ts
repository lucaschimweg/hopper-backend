﻿import * as mongoose from 'mongoose';

interface IApp extends mongoose.Document {
    name: string;
    imageUrl: string;
    isHidden: boolean;
    baseUrl: string;
    manageUrl: string | undefined;
    contactEmail: string;
    cert: string;
}

const AppSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isHidden: { type: Boolean, default: false },
    baseUrl: { type: String, required: true },
    manageUrl: { type: String },
    contactEmail: { type: String, required: true },
    cert: { type: String, required: true }
}, {
    versionKey: false // set to true to keep track of version of document
});

AppSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret) { delete ret._id }
});

const App = mongoose.model<IApp>("App", AppSchema);
export default App;