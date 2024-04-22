import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import StudentInfo from "./StudentInfo";

export function FiveViews() {
    const [addProduct, setAddProduct] = useState(false);
    const [displayProducts, setDisplayProducts] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [studentInfo, setStudentInfo] = useState(true);

    function  addProductView() {
        return <AddProductForm />
    };

    function displayProductsView() {
        
    };

    function updateProductView() {

    };

    function deleteProductView() {

    };

    function studentInfoView() {
        return <StudentInfo />
    };

    return (
        <div>
            {addProduct && addProductView()}
            {studentInfo && studentInfoView()}
        </div>
    );
}

export default FiveViews;