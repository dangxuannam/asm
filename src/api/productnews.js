import instance from "./instance";

export const getAll = () => {
    const url = "/productsnew";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/productsnew/${id}`;
    return instance.get(url);
};
export const add = (productnew) => {
    const url = "/productsnew";
    return instance.post(url, productnew);
};
export const remove = (id) => {
    const url = `/productsnew/${id}`;
    return instance.delete(url);
};