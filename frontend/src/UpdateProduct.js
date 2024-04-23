import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import {Products} from "./Products";
import {Categories} from "./Categories";

function UpdateProduct() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);
    const [query, setQuery] = useState('');
    const [ProductsCategory, setProductsCategory] = useState(Products);
    const [ProductID, setProductID] = useState(Products);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log("Submit button clicked.");
        setProductID(data.input_id);
        console.log("Product ID: ", ProductID);
    }

    function SearchById() {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <label htmlFor="input_id">
                        Product ID: 
                    </label>
                    <input {...register("input_id")} id="input_id"/>
                </p>
                <input type="submit" value="Search"/>
            </form>
        );
    };

    function ConfirmProduct() {
        return (
            <div>

            </div>
        );
    };

    function UpdatePrice() {
        return (
            <div>
                {/* <h3>Update Item Price:</h3>
                <form onSubmit={handleSubmit(onSubmit)} */}
            </div>
        );
    };



    return (
        <div>
            {viewer===0 && <SearchById />}
            {/* {viewer===1 && <ConfirmProduct />}
            {viewer===2 && <UpdatePrice />} */}
        </div>
    );
}

export default UpdateProduct;