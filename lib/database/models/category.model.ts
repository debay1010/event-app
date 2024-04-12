import { Schema, Document, models, model } from "mongoose";

export interface ICategory extends Document {
	_id: string;
	category: string;
}

const CategorySchema = new Schema({
	category: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
