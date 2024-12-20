type Callback = (...args: any[]) => void;

export const debounce = (callback: Callback, wait: number) => {
    let timer = null;

    return (...args: any[]) => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callback(...args);
        }, wait);
    };
};
