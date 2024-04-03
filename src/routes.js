import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, NavLink, Link, Routes, Router } from "react-router-dom";

function RouterComponent(){
    return(
        <Routes>
        <Route path="/" element={<Home />} exact={true} />
        </Routes>
    )
}

export default RouterComponent;