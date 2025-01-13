export async function getAllProperties() {
    const url = "http://localhost:8080/api/properties";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error(error.message);
        return { success: false, data: null };
    }
}

export async function getProperty(id) {
    const url = "http://localhost:8080/api/properties/" + id;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data }; 
    } catch (error) {
        console.error(error.message);
        return { success: false, data: null }; 
    }
}
