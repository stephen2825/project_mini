import axios from "axios";


export async function fetchCustomer() {
    try {
        const response = await axios.get("http://127.0.0.1:4990/newUser");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveCustomer(customerData) {
    try {
        const response = await axios.post("http://127.0.0.1:4990/newUser", customerData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCustomer(phoneNumber) {
    try {
        const response = await axios.delete(`http://127.0.0.1:4990/newUser/${phoneNumber}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchCustomerByPhoneNumber(phoneNumber) {
    try {
        const response = await axios.get(`http://127.0.0.1:4990/newUser/${phoneNumber}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateCustomer(updatedCustomerData, phoneNumber) {
    try {
        const response = await axios.put(`http://127.0.0.1:4990/newUser/${phoneNumber}`, updatedCustomerData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



