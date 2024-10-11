import ins from "../axios";
import admin from "../axios/adminaxios";

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
    async Login(email, password) {
        try {
            const response = await admin.post('admin_user/login/', {
                email: email,
                password: password
            });
    
            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }
    async Register(first_name, last_name, email, password, confirm_password, phone_number) {
        try {
            const response = await admin.post('admin_user/register/', {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                confirm_password: confirm_password,
                phone_number: phone_number
            });
            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }
    async Activation(otp) {
        try {
            const response = await admin.post('admin_user/activate/', {
                activation_code: otp
            });
            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }
    async resetPassword(email) {
        try {
            const response = await admin.post('admin_user/reset-password/', {
                email: email
            });
            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }        
    async activCodePassword(otp) {
        try {
            const response = await admin.post('admin_user/reset-password-verify/', {
                reset_code: otp
            });
            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }     
   
}
export default new RegueAdmin;
