// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { removeProduct } from "../features/products/productSlice";
// import useProductsApi from "../api/useProductsApi";
// import Loader from "./Loader";

// const ProductList = () => {
//   const { items, loading } = useProductsApi();
//   const [search, setSearch] = useState("");
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const savedProducts = JSON.parse(localStorage.getItem("products"));
//     if (savedProducts && savedProducts.length > 0) {
//       setDisplayedProducts(savedProducts);
//       console.log("Loaded products from local storage:", savedProducts);
//     } else if (items.length > 0) {
//       setDisplayedProducts(items);
//       console.log("Loaded products from API:", items);
//     }
//   }, [items]);

//   useEffect(() => {
//     console.log(
//       "Updating local storage with displayedProducts:",
//       displayedProducts
//     );
//     localStorage.setItem("products", JSON.stringify(displayedProducts));
//   }, [displayedProducts]);

//   const handleRemoveProduct = (productId) => {
//     const updatedProducts = displayedProducts.filter(
//       (product) => product.product_id !== productId
//     );
//     setDisplayedProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));
//     dispatch(removeProduct(productId));
//     console.log("Removed product with ID:", productId);
//   };

//   const filteredProducts = displayedProducts.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   console.log("Filtered products:", filteredProducts);

//   if (loading) return <Loader />;

//   return (
//     <div className="bg-blue-100">
//       <div className="bg-blue-100 py-16">
//         <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//           <h2 className="text-2xl font-bold tracking-tight text-black text-center">
//             Product List
//           </h2>
//           <input
//             type="text"
//             placeholder="Search Products..."
//             onChange={(e) => setSearch(e.target.value)}
//             className="mt-4 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.product_id}
//                 className="group relative bg-white border rounded-lg shadow-sm overflow-hidden"
//               >
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <img
//                     src={product.image || "https://via.placeholder.com/300"}
//                     alt={product.name}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between p-4">
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">
//                       {product.name}
//                     </h3>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {product.description || "No description available."}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       <strong>Unit:</strong> {product.unit || "Piece"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">
//                       ${product.price}
//                     </p>
//                     {product.discount && (
//                       <p className="text-xs text-red-500">
//                         Discount: {product.discount}%
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => {
//                     if (product.product_id) {
//                       handleRemoveProduct(product.product_id);
//                     } else {
//                       console.warn(
//                         "Cannot remove product without ID:",
//                         product
//                       );
//                     }
//                   }}
//                   className="w-full py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none"
//                 >
//                   Remove Product
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { removeProduct } from "../features/products/productSlice";
// import useProductsApi from "../api/useProductsApi";
// import Loader from "./Loader";

// import { MdCancel } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// const ProductList = () => {
//   const { items, loading } = useProductsApi();
//   const [search, setSearch] = useState("");
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const savedProducts = JSON.parse(localStorage.getItem("products"));
//     if (savedProducts && savedProducts.length > 0) {
//       setDisplayedProducts(savedProducts);
//       console.log("Loaded products from local storage:", savedProducts);
//     } else if (items.length > 0) {
//       setDisplayedProducts(items);
//       console.log("Loaded products from API:", items);
//     }
//   }, [items]);

//   useEffect(() => {
//     console.log(
//       "Updating local storage with displayedProducts:",
//       displayedProducts
//     );
//     localStorage.setItem("products", JSON.stringify(displayedProducts));
//   }, [displayedProducts]);

//   const handleRemoveProduct = (productId) => {
//     const updatedProducts = displayedProducts.filter(
//       (product) => product.product_id !== productId
//     );
//     setDisplayedProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));
//     dispatch(removeProduct(productId));
//     console.log("Removed product with ID:", productId);
//   };

//   const handleEditProduct = (productId) => {
//     setDisplayedProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.product_id === productId
//           ? { ...product, isEditing: !product.isEditing }
//           : product
//       )
//     );
//   };

//   const handleChange = (productId, field, value) => {
//     setDisplayedProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.product_id === productId
//           ? { ...product, [field]: value }
//           : product
//       )
//     );
//   };

//   const handleUpdateProduct = (productId) => {
//     const updatedProducts = displayedProducts.map((product) =>
//       product.product_id === productId
//         ? { ...product, isEditing: false }
//         : product
//     );
//     setDisplayedProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));
//   };

//   const filteredProducts = displayedProducts.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <Loader />;

//   return (
//     <div className="bg-blue-100">
//       <div className="bg-blue-100 py-16">
//         <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//           <h2 className="text-2xl font-bold tracking-tight text-black text-center">
//             Product List
//           </h2>
//           <input
//             type="text"
//             placeholder="Search Products..."
//             onChange={(e) => setSearch(e.target.value)}
//             className="mt-4 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.product_id}
//                 className="group relative bg-white border rounded-lg shadow-sm overflow-hidden"
//               >
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <img
//                     src={product.image || "https://via.placeholder.com/300"}
//                     alt={product.name}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between p-4">
//                   <div>
//                     {product.isEditing ? (
//                       <>
//                         <input
//                           type="text"
//                           value={product.name}
//                           onChange={(e) =>
//                             handleChange(
//                               product.product_id,
//                               "name",
//                               e.target.value
//                             )
//                           }
//                           className="w-full border rounded-md p-2"
//                         />
//                         <textarea
//                           value={product.description}
//                           onChange={(e) =>
//                             handleChange(
//                               product.product_id,
//                               "description",
//                               e.target.value
//                             )
//                           }
//                           className="w-full border rounded-md p-2 mt-2"
//                         ></textarea>
//                         <input
//                           type="text"
//                           value={product.price}
//                           onChange={(e) =>
//                             handleChange(
//                               product.product_id,
//                               "price",
//                               e.target.value
//                             )
//                           }
//                           className="w-full border rounded-md p-2 mt-2"
//                         />
//                         <input
//                           type="text"
//                           value={product.unit}
//                           onChange={(e) =>
//                             handleChange(
//                               product.product_id,
//                               "unit",
//                               e.target.value
//                             )
//                           }
//                           className="w-full border rounded-md p-2 mt-2"
//                         />
//                         <input
//                           type="text"
//                           value={product.discount}
//                           onChange={(e) =>
//                             handleChange(
//                               product.product_id,
//                               "discount",
//                               e.target.value
//                             )
//                           }
//                           className="w-full border rounded-md p-2 mt-2"
//                         />
//                         <button
//                           onClick={() =>
//                             handleUpdateProduct(product.product_id)
//                           }
//                           className="mt-4 w-full py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
//                         >
//                           Update Product
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <h3 className="text-sm font-medium text-gray-900">
//                           {product.name}
//                         </h3>
//                         <p className="mt-1 text-sm text-gray-500">
//                           {product.description || "No description available."}
//                         </p>
//                         <p className="mt-1 text-sm text-gray-500">
//                           <strong>Unit:</strong> {product.unit || "Piece"}
//                         </p>
//                       </>
//                     )}
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">
//                       ${product.price}
//                     </p>
//                     {product.discount && (
//                       <p className="text-xs text-red-500">
//                         Discount: {product.discount}%
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveProduct(product.product_id)}
//                   className="w-full py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none"
//                 >
//                   Remove Product
//                 </button>
//                 <button
//                   onClick={() => handleEditProduct(product.product_id)} // Toggle editing
//                   className="absolute top-2 right-2 py-2 px-4 bg-blue-500 text-white rounded-full"
//                 >
//                   {product.isEditing ? <MdCancel /> : <CiEdit />}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/products/productSlice";
import useProductsApi from "../api/useProductsApi";
import Loader from "./Loader";
import { Link } from "react-router-dom";

import { CiEdit } from "react-icons/ci";

// Modal Component for Editing
const EditModal = ({ product, onSave, onClose, onChange }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">Edit Product</h3>
        <Link
          to="/add-product"
          className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Browse Products
        </Link>
        <input
          type="text"
          value={product.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Product Name"
          className="w-full border rounded-md p-2 mb-2"
        />
        <textarea
          value={product.description}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="Product Description"
          className="w-full border rounded-md p-2 mb-2"
        ></textarea>
        <input
          type="text"
          value={product.price}
          onChange={(e) => onChange("price", e.target.value)}
          placeholder="Product Price"
          className="w-full border rounded-md p-2 mb-2"
        />
        <input
          type="text"
          value={product.unit}
          onChange={(e) => onChange("unit", e.target.value)}
          placeholder="Unit"
          className="w-full border rounded-md p-2 mb-2"
        />
        <input
          type="text"
          value={product.discount}
          onChange={(e) => onChange("discount", e.target.value)}
          placeholder="Discount"
          className="w-full border rounded-md p-2 mb-4"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-gray-500 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const { items, loading } = useProductsApi();
  const [search, setSearch] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts && savedProducts.length > 0) {
      setDisplayedProducts(savedProducts);
    } else if (items.length > 0) {
      setDisplayedProducts(items);
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(displayedProducts));
  }, [displayedProducts]);

  const handleRemoveProduct = (productId) => {
    const updatedProducts = displayedProducts.filter(
      (product) => product.product_id !== productId
    );
    setDisplayedProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    dispatch(removeProduct(productId));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); // Open modal with selected product
  };

  const handleChange = (field, value) => {
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleSaveProduct = () => {
    const updatedProducts = displayedProducts.map((product) =>
      product.product_id === editingProduct.product_id
        ? { ...editingProduct, isEditing: false }
        : product
    );
    setDisplayedProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setEditingProduct(null); // Close modal
  };

  const filteredProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="bg-blue-100">
      <div className="bg-blue-100 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-black text-center">
            Product List
          </h2>

          <input
            type="text"
            placeholder="Search Products..."
            onChange={(e) => setSearch(e.target.value)}
            className="mt-4 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div
                key={product.product_id}
                className="group relative bg-white border rounded-lg shadow-sm overflow-hidden"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between p-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description || "No description available."}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      <strong>Unit:</strong> {product.unit || "Piece"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                    {product.discount && (
                      <p className="text-xs text-red-500">
                        Discount: {product.discount}%
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveProduct(product.product_id)}
                  className="w-full py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none"
                >
                  Remove Product
                </button>
                <button
                  onClick={() => handleEditProduct(product)}
                  className="absolute top-2 right-2 py-2 px-4 bg-blue-500 text-white rounded-full"
                >
                  {<CiEdit />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {editingProduct && (
        <EditModal
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={() => setEditingProduct(null)}
          onChange={(field, value) => handleChange(field, value)}
        />
      )}
    </div>
  );
};

export default ProductList;
