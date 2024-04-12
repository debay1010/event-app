import mongoose, { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
	_id: string;
	title: string;
	description?: string; // Optional property
	location?: string; // Optional property
	imageURL: string;
	createdAt: Date;
	startDateTime: Date;
	endDateTime: Date;
	isfree: boolean;
	price?: string; // Optional property
	url?: string; // Optional property
	category: { _id: string; name: string };
	organizer: {
		_id: string;
		firstName: string;
		lastName: string;
	};
}

const EventSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String },
	location: { type: String },
	imageURL: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	startDateTime: { type: Date, default: Date.now },
	endDateTime: { type: Date, default: Date.now },
	isfree: { type: Boolean, default: false },
	price: { type: String },
	url: { type: String },
	category: { type: Schema.Types.ObjectId, ref: "Category" },
	organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
