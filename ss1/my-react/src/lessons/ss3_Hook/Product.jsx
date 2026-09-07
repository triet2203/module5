import {useState} from "react";

function Product() {
    const [products, setProducts] = useState([
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
    ]);

    //State lưu tên sản phẩm đang nhập
    const [name, setName] = useState("");

    //State lưu giá sản phẩm đang nhập
    const [price, setPrice] = useState("");

    //State lưu từ khóa tìm kiếm
    const [search, setSearch] = useState("");

    const [deleteId, setDeleteId] = useState(null);

    const confirmDelete = () => {
        setProducts(
            products.filter(product => product.id !== deleteId)
        );

        setDeleteId(null);
    };
    //Thêm sản phẩm
    const handleAdd = () => {
        if (name.trim() === "" || price === "") {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: name,
            price: Number(price)
        };

        setProducts([...products, newProduct]);

        //Xóa dữ liệu trong input sau khi thêm
        setName("");
        setPrice("");
    };

    //Tìm kiếm sản phẩm
    const filterProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="container">

            <h1>Quản lý sản phẩm</h1>

            {/* Form thêm sản phẩm */}
            <div className="form">

                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Giá"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />

                <button onClick={handleAdd}>
                    Thêm
                </button>
            </div>

            {/* Ô tìm kiếm */}
            <input
                className="search"
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            {/* Danh sách sản phẩm */}
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                </tr>
                </thead>

                <tbody>
                {filterProducts.map((product, index) => (
                    <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price.toLocaleString()} VNĐ</td>
                        <td>
                            <button onClick={() => setDeleteId(product.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {deleteId !== null && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Xác nhận xóa</h2>

                        <p>
                            Bạn có chắc chắn muốn xóa sản phẩm này không?
                        </p>

                        <button onClick={confirmDelete}>
                            Có, xóa
                        </button>

                        <button onClick={() => setDeleteId(null)}>
                            Hủy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;