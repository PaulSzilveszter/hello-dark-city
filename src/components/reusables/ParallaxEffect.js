import { useEffect, useState } from "react";

export default function ParallaxEffect(props) {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <img src={props.src} style={{ position:"absolute", bottom:0, left:0, height: props.height, width: props.width, transform: `translateY(${offsetY * props.speed}px)` }} alt="" />
        </>
    )
}