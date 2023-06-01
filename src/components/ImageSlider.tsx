import { useEffect, useRef, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { SimpleImageSliderProps } from "react-simple-image-slider/dist/ImageSlider";

function ImageSlider(props: Omit<SimpleImageSliderProps, "width">) {
	const divRef = useRef<HTMLInputElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			// @ts-ignore divRef.current will never be null
			setWidth(divRef.current.offsetWidth);
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	})

	return (
		<div ref={divRef}>
			<SimpleImageSlider width={width} {...props}/>
		</div>
	);
}

export default ImageSlider;