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
}

export default new Regue;
