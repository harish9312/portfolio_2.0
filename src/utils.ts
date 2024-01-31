export const checkWindow = () => typeof window !== "undefined";

export const createNodeKey = (index: number) => index + new Date().getTime();
