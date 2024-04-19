import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

function AddProductForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);

    const onSubmit = data => {
        console.log(data);
        console.log(data.id);

        setDataF(data);
        setViewer(1);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
                <div className="form-group">
                    <input {...register("id", { required: true })} placeholder="ID" className="form-control"/>
                    {errors.id && <p className="text-danger">Product ID is required.</p>}
                </div>
                <div className="form-group">
                    <input {...register("price", { required: true })} placeholder="Price" className="form-control"/>
                    {errors.price && <p className="text-danger">Product Price is required.</p>}
                </div>
                <div class="form-group">
                    <textarea {...register("description", { required: true })} placeholder="Description" class="form-control" />
                    {errors.id && <p className="text-danger">Product Description is required.</p>}
                </div>
                <select class="form-control">
                    <option>electronics</option>
                    <option>jewelry</option>
                    <option>men's clothing</option>
                    <option>women's clothing</option>
                </select>
                <div class="form-group">
                    <input {...register("imageUrl", { required: true })} placeholder="Image URL" class="form-control" />
                    {errors.imageUrl && <p className="text-danger">Image URL is required.</p>}
                </div>
                <div class="form-group">
                    <input {...register("rate", { required: true })} placeholder="Rating" class="form-control" />
                    {errors.rate && <p className="text-danger">Rating is required.</p>}
                </div>
                <div class="form-group">
                    <input {...register("count", { required: true })} placeholder="Count" class="form-control" />
                    {errors.count && <p className="text-danger">Count is required.</p>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddProductForm;