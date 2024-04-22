import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import StudentInfo from "./StudentInfo";
import UpdateProduct from "./UpdateProduct";

export function FiveViews() {
    const [addProduct, setAddProduct] = useState(false);
    const [displayProducts, setDisplayProducts] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(true);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [studentInfo, setStudentInfo] = useState(false);

    function  addProductView() {
        return <AddProductForm />
    };

    function displayProductsView() {
        
    };

    function updateProductView() {
        return <UpdateProduct />
    };

    function deleteProductView() {

    };

    function studentInfoView() {
        return <StudentInfo />
    };

    return (
        <div>
            {addProduct && addProductView()}
            {updateProduct && updateProductView()}
            {studentInfo && studentInfoView()}
        </div>
    );
}

export default FiveViews;