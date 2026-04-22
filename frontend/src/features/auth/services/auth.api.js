const api =axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export const register = async ({username, email, password})=>{
    try {
        const response = await api.post("/register",{username, email , password})
        return response.data;
    } catch (error) {
        console.log(error);
    }

}


export const login = async ({email, password})=>{
    try {
        const response = await api.get("login",{email , password})
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export const logout = async ()=>{
    try {
        const response = await api.get("logout")
        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export const getMe = async()=>{
    try {
        const response = await api.get("me")
        return response.data;
    } catch (error) {
        console.log(error);
    }

}