export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);
    return param;
}

export const timeOutPromise = (ms, promise) => {

    const timeOut = new Promise((_resolve, reject) =>
        setTimeout(() => reject(`Timeout (${ms} ms)`), ms));

    return Promise.race([timeOut, promise]);
};

export const delay = ms => data =>
    new Promise((resolve, _reject) =>
        setTimeout(() => resolve(data), ms));

export const retry = (retries, ms, fn) =>
    fn().catch(err => {
        console.log(retries);
        return delay(ms)().then(() =>
            retries > 1 ? retry(--retries, ms, fn) : Promise.reject(err));
    });
