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

    function SearchById() {
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
    };

    function ConfirmProduct() {
        return (
            <div>
                <h3>Confirm Product to Update: </h3>
                <div id="search-result">

                </div>
                <div class="col-auto">
                    <button class="btn btn-primary mb-3">Go Back</button>
                    <button class="btn btn-primary mb-3">Confirm</button>
                </div>
            </div>
        );
    };

    return (
        <div>
            {viewer===0 && <SearchById />}
            {viewer===1 && <ConfirmProduct />}
        </div>
    );
}

export default UpdateProduct;