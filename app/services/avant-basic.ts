class CustomerApplicationService {
    baseUrl: string = 'http://localhost:5001/api/v3/customer_applications/';

    async createCustomer() {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "product_type": "credit_card"
            })
        });
        return await response.json();
    }
}


export { CustomerApplicationService };