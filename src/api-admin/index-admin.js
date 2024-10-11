import ins from "../axios";

class RegueAdmin {
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
export default new RegueAdmin;
