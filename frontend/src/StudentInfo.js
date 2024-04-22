import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function StudentInfo() {
    return (
        <div>
            <h3>Student Information</h3><br></br>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h4>Luke Pedersen</h4>
                        <p><strong>Email: lukeped@iastate.edu</strong></p>
                    </div>
                    <div class="col">
                        <h4>Rachel San Agustin</h4>
                        <p><strong>Email: rds2@iastate.edu</strong></p>
                    </div>
                </div>
            </div>
            <br></br>
            <h4>Course: SE/COM S 319</h4>
            <h4>Date: April 27, 2024</h4>
            <h4>Instructor: Dr. Ali Jannesari</h4>
            <br></br>
            <h4>Project Abstract</h4>
            
            <p>TODO: add project abstract & link to repo/README.md</p>
        </div>
    );
}

export default StudentInfo;