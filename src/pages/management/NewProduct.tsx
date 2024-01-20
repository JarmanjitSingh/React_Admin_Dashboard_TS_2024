import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management" style={{ height: "100vh" }}>
        <article>
          <form>
            <h2>New Product</h2>

            <div>
              <label>Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>

            <div>
              <label>Price</label>
              <input
                required
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                placeholder="Stock"
              />
            </div>

            <div>
              <label>Photo</label>
              <input
                type="file"
                required
                placeholder="Stock"
                onChange={changeImageHandler}
              />
            </div>

            {photo && <img src={photo} alt="product image" />}

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
