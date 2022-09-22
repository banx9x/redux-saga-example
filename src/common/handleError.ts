export const handleError = (res: Response) => {
    if (!res.ok) throw Error(res.statusText);

    return res;
};
