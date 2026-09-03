import React from "react";

class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: 1,
                    name: "Iphone 15",
                    price: 2000000
                },
                {
                    id: 2,
                    name: "Samsung S24",
                    price: 1800000
                },
                {
                    id: 3,
                    name: "Xiaomi 24",
                    price: 1500000
                }
            ]
        };
    }

    deleteProduct = (id) => {
        const newProduct = this.state.products.filter(
            product => product.id !== id
        );

        this.setState({
            products: newProduct
        });
    };

    render() {
        return (
            <div>
                <h2>Danh sách sản phẩm</h2>

                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() =>
                                    this.deleteProduct(product.id)
                                }>Xóa</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;