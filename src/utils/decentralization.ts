
export const Decentralization = () => {



    const auth = localStorage.getItem("auth") ?? null;
    const parsedAuth = auth ? JSON.parse(auth) : null;
    const authorized = parsedAuth?.response?.role || {};


    return authorized
}

export const role = Decentralization()