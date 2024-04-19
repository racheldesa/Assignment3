import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";

export function FiveViews() {
    const [addProduct, setAddProduct] = useState(true);
    const [readProducts, setReadProducts] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [studentInfo, setStudentInfo] = useState(false);

    function  addProductView() {
        return <AddProductForm />
    };

    function readProductsView() {

    };

    function updateProductView() {

    };

    function deleteProductView() {

    };

    function studentInfoView() {

    };

    return (
        <div>
            {addProduct && addProductView()}
        </div>
    );
}

export default FiveViews;