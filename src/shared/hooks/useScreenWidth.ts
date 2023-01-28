import {useEffect, useState} from "react";

export const useScreenWidth = (): number => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	useEffect(() => {
		setWidth(window.innerWidth);
	}, [window.innerWidth]);
	return width;
};
