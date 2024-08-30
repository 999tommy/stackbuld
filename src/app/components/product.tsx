import { FC } from "react";

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        description: string;
    };
    onEdit: () => void;
    onDelete: () => void;
}

const Product: FC<ProductProps> = ({ product, onEdit, onDelete  }) => {

  const handleEdit = (id: number) => {
    const products = localStorage.getItem('products');
    const productToEdit = JSON.parse('products').find((product: any) => product.id === id);
  };
  const handleDelete = (id: number) => {
    const products = localStorage.getItem('products');
    const updatedProducts = JSON.parse('products').filter((product: any) => product.id === id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

    return (
        <>
           <div className=" bg-white shadow-md rounded-lg p-4 mb-4">
              <h2 className=" text-black text-lg font-bold">
                {product.name}
              </h2>
              <p className="text-gray-600">
                {product.description}
              </p>
              <p className="text-gray-600">
                ${product.price}
              </p>
             <button 
             className="bg-blue-500 rounded-lg text-white font-bold py-2 px-4 mx-2" 
             onClick={() => 
              onEdit()
             }
             >Edit</button>
             <button 
             className="bg-blue-500 rounded-lg text-white font-bold py-2 px-4 mx-2" 
             onClick={() => 
              onDelete()
             }
             >Delete</button>
           </div>
        </>
    );
};

export default Product;