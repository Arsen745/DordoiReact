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
            const url = `${val}/${id}`; // Формируем URL
            const response = await ins(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching cart:", error);
            throw error;
        }
    }

}

export default new Regue;
