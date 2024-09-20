import ins from "../axios";

class Regue {
    async Card(val) {
        try {
            const response = await ins(val);
            return response.data;
        } catch (error) {
            console.error("Error fetching card:", error);
            throw error;
        }
    }
    async Cart(val, id) {
        try {
            const url = `${val}/${id}`; 
            const response = await ins(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching cart:", error);
            throw error;
        }
    }
    async Search(val) {
        try {
            const response = await ins(val);
            return response.data;
        } catch (error) {
            console.error("Error fetching card:", error);
            throw error;
        }
    }
    

}

export default new Regue;
