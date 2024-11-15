// import React, { useState } from "react";

// const ProductForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     description: "",
//     image: "",
//     unit: "",
//     discount: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newProduct = {
//       ...form,
//       product_id: Date.now(),
//     };

//     const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     savedProducts.push(newProduct);
//     localStorage.setItem("products", JSON.stringify(savedProducts));

//     setForm({
//       name: "",
//       price: "",
//       description: "",
//       image: "",
//       unit: "",
//       discount: "",
//     });

//     alert("Product added successfully!");
//   };

//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-black">
//           Add New Product
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={form.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Product Name"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="price"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Price
//             </label>
//             <input
//               type="text"
//               id="price"
//               required
//               value={form.price}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Product Price"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Description
//             </label>
//             <textarea
//               required
//               id="description"
//               value={form.description}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Product Description"
//             ></textarea>
//           </div>
//           <div>
//             <label
//               htmlFor="image"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Image URL
//             </label>
//             <input
//               required
//               type="text"
//               id="image"
//               value={form.image}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Image URL"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="unit"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Unit
//             </label>
//             <input
//               type="text"
//               id="unit"
//               value={form.unit}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Unit"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="discount"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Discount (optional)
//             </label>
//             <input
//               type="text"
//               id="discount"
//               value={form.discount}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Discount %"
//             />
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductForm;

import React, { useState } from "react";

const ProductForm = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    unit: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.description || !form.image) {
      alert("Please fill in all required fields.");
      return;
    }
    const newProduct = {
      ...form,
      product_id: Date.now(),
    };
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    savedProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(savedProducts));
    setForm({
      name: "",
      price: "",
      description: "",
      image: "",
      unit: "",
      discount: "",
    });
    alert("Product added successfully!");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Product Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                value={form.price}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Product Price"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Product Description"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={form.image}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="unit"
                className="block text-sm font-medium text-gray-700"
              >
                Unit
              </label>
              <input
                type="text"
                id="unit"
                value={form.unit}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Unit"
              />
            </div>
            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700"
              >
                Discount (optional)
              </label>
              <input
                type="text"
                id="discount"
                value={form.discount}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Discount %"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
