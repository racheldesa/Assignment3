import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import {Products} from "./Products";
import {Categories} from "./Categories";

function UpdateProduct() {
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);
    const [ProductID, setProductID] = useState('');
    const [ProductPrice, setProductPrice] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

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
        function handleConfirm(event) {
            event.preventDefault();
            console.log("Confirm button clicked.");
            setViewer(2);
        }

        function handleGoBack(event) {
            event.preventDefault();
            console.log("Go Back button clicked.");
            setViewer(0);
        } 

        return (
            <div>
            <h3>Change the price of this product?</h3><br></br>
            <div class="card w-50">
                <img src={Products[ProductID].image} />
                <div class="card-body">
                    <p class="card-text"><strong>{Products[ProductID].title}</strong></p>
                    <p class="card-text">{Products[ProductID].description}</p>
                    <p class="card-text">${Products[ProductID].price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={handleConfirm}>Confirm</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={handleGoBack}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    };

    function UpdatePrice() {
        function handleSubmit(event) {
            event.preventDefault();
            console.log(`New Price: $${Products[ProductID].price}`)
        }

        return (
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="input_price">
                        Update Price: $
                    </label>
                    <input
                        type="text"
                        id="input_price"
                        value={ProductPrice}
                        onChange={ (e) => setProductPrice(e.target.value)} />
                </p>
                <input type="submit" value="Change Price"/>
            </form>
        );
    };



    return (
        <div>
            {viewer===0 && <SearchById />}
            {viewer===1 && <ConfirmProduct />}
            {viewer===2 && <UpdatePrice />}
        </div>
    );
}

export default UpdateProduct;