import { useRef } from "react";

export const useDebounce = (func,delay) => {
    let  {current:id} = useRef();

    return () => {
        id && clearTimeout(id);
        id = setTimeout(() => {
            func();
        },delay);
    };
}