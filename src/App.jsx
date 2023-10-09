import React, { useContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/MainContainer";

import Home from "./pages/Home/Home";
import AnimationSB from "./pages/AnimationSB/AnimationSB";
import ApiSB from "./pages/ApiSB/ApiSB";
import Context from "./pages/Context/Context";
import Validation from "./pages/Validation/Validation";
import ClassComp from "./pages/ClassComp/ClassComp";
import Filter from "./pages/Filter/Filter";
import Challenge from "./pages/Challenge/Challenge";

import TestContextProvider from "./context/TestContextProvider";

import { Route, Routes } from "react-router-dom";
import MyURLSearchParams from "./pages/URLSearchParams/URLSearchParams";

function App() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/animation" element={<AnimationSB />} />
					<Route path="/handlingapi" element={<ApiSB />} />
					<Route
						path="/context"
						element={
							<TestContextProvider>
								<Context />
							</TestContextProvider>
						}
					/>
					<Route path="/validation" element={<Validation />} />
					<Route path="/classcomp" element={<ClassComp />} />
					<Route path="/filter" element={<Filter />} />
					<Route path="/challenge" element={<Challenge />} />
					<Route path="/urlsearchparams" element={<MyURLSearchParams />} />
				</Routes>
			</MainContainer>
		</>
	);
}

export default App;
