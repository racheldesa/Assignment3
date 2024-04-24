import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import {Products} from "./Products";
import {Categories} from "./Categories";

function UpdateProduct() {
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);
    const [query, setQuery] = useState('');
    const [ProductsCategory, setProductsCategory] = useState(Products);
    const [ProductID, setProductID] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    // function onSubmit(data) {
    //     console.log("Submit button clicked.");
    //     setProductID(data.input_id);
    //     console.log("Product ID: ", ProductID);
    // }

    function SearchById() {

        function handleSubmit(event) {
            event.preventDefault();
            console.log(`Product ID: ${ProductID}`)
            setViewer(1);
        }

        return (
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="input_id">
                        Product ID: 
                    </label>
                    <input
                        type="text"
                        id="input_id"
                        value={ProductID}
                        onChange={ (e) => setProductID(e.target.value)} />
                </p>
                <input type="submit" value="Search"/>
            </form>
        );
    };

    function ConfirmProduct() {
        return (
            <div>
            <h3>Change the price of this product?</h3><br></br>
            <div class="card w-50">
                <img src={Products[ProductID].image} />
                <div class="card-body">
                    <p class="card-text"><strong>{Products[ProductID].title}</strong></p>
                    <p class="card-text">{Products[ProductID].description}</p>
                    <p class="card-text">{Products[ProductID].price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Confirm</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
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
            {viewer===1 && <ConfirmProduct />}
            {/* {viewer===2 && <UpdatePrice />} */}
        </div>
    );
}

export default UpdateProduct;