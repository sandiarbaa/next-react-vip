import CardProduct from "@/app/Components/Fragments/CardProduct";

const ProductsPages: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col md:flex-row">
      <CardProduct>
        <CardProduct.Header image="/assets/images/shoes1.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          porro reiciendis culpa, excepturi minus eos quidem nobis velit ipsa
          repellat? Odit. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dicta, itaque!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/assets/images/shoes1.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          porro reiciendis culpa, excepturi minus eos quidem nobis velit ipsa
          repellat? Odit. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dicta, itaque!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPages;
