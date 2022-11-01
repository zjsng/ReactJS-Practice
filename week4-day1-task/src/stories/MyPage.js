import React from "react";

import { MUIHeader } from "./MUIHeader";
import { Footer } from "./Footer";
import { MUICard } from "./MUICard";
import { Form } from "./Form";

import "./myPage.css";

export const MyPage = () => {
	return (
		<div>
			<MUIHeader />
			<Form />
			<MUICard title="Week 4 Day 1 Task" body="Just laying out components with Storybooks" />
			<Footer />
		</div>
	);
}