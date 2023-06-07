<div className="w-[100%] grid grid-cols-2 gap-4 justify-center items-center ">
  <Carousel
    navButtonsProps={{
      // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
      style: {
        backgroundColor: "#FFC0CB",
        borderRadius: 0,
      },
    }}
  >
    {product.images &&
      product.images.map((img, index) => (
        <img
          src={img.url}
          alt={`${index} Slider`}
          key={index}
          style={{ maxWidth: "100%", height: "100%" }}
        />
      ))}
  </Carousel>
  <div className=" py-[50px] px-[5%]">
    <span className="text-[10px] mb-[10px] block uppercase">
      {product.category}
    </span>
    <Link>
      <h2 className="mb-[10px] text-[30px] leading-[3rem] font-[700] ">
        {product.name}
      </h2>
    </Link>
    <p className="mb-[10px] text-[24px] font-[700] text-[#f00]">
      <span className="text-[#787878] mr-[15px] line-through">$65.00</span>
      {`$${product.price}`}
    </p>
    <p className="mb-[10px] leading-[2rem] text-[1.2rem] font-[300]">
      {product}
    </p>
    <div className="my-[50px] flex items-center text-center">
      <div
        className=" mr-[3rem] relative w-[30%] select-none"
        onClick={handleCollapse}
      >
        <span className="px-[30px] mb-[10px] block bg-[#fff] drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] leading-[3rem] ">
          SIZE: X
        </span>
        <ul
          className={
            isActive
              ? "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000 "
              : "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000 hidden"
          }
        >
          <li className="px-[20px]">SIZE: XL</li>
          <li className="px-[20px]">SIZE: X</li>
          <li className="px-[20px]">SIZE: M</li>
          <li className="px-[20px]">SIZE: S</li>
        </ul>
      </div>
      <div
        className="mr-[3rem] relative w-[30%] select-none"
        onClick={handleCollapse}
      >
        <span className="px-[30px] mb-[10px] block bg-[#fff] drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] leading-[3rem] ">
          COLOR: BLACK
        </span>
        <ul
          className={
            isActive
              ? "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000  "
              : "absolute top-[50px] bg-[#f6f6f6] w-[100%] text-start font-[400] leading-[40px] ease-in duration-1000 hidden "
          }
        >
          <li className="px-[20px]">SIZE: XL</li>
          <li className="px-[20px]">SIZE: X</li>
          <li className="px-[20px]">SIZE: M</li>
          <li className="px-[20px]">SIZE: S</li>
        </ul>
      </div>
    </div>
    <div className="flex  items-center">
      <div className="hover-content  bottom-[20px] bg-[#FFC0CB] text-center text-[white] w-[30%]">
        <div className="">
          <Link
            to="add-cart"
            className="leading-[50px] text-[14px] font-[400] "
          >
            ADD TO CART
          </Link>
        </div>
      </div>
      <div className="ml-[24px]">&copy;</div>
    </div>
  </div>
</div>;
