import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

function UpdateProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);

    const onSubmit = data => {
        console.log(data);
        setDataF(data);
        setViewer(1);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                <div class="col-auto">
                    <input {...register("updateId", { required: true })} placeholder="Product ID"></input>
                    {errors.updateId && <p>Product ID is required.</p>}
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Search</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateProduct;