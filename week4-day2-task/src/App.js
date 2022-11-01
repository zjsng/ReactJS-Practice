import React from "react";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

import { MyPage } from "./stories/MyPage";
import RecoilTask from "./RecoilTask";

const App = () => {
	return (
		<RecoilRoot>
			<RecoilTask />
		</RecoilRoot>
	);
}

export default App;