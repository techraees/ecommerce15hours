import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getProduct,
  getProductDetails,
} from "../../../../redux/actions/productAction";

import Loader from "../../../Layout/Loader/Loader";
import Product from "../../../Home/sub/Product";

const Products = ({ price }) => {
  // Passing Data
  console.log(price);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  console.log(
    products,
    loading,
    resultPerPage,
    productsCount,
    filteredProductsCount
  );
  const { keyword } = useParams();
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price));
    dispatch(getProductDetails());
  }, [dispatch, keyword, currentPage, price]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className=" w-[855px] bg-[wh ite]">
          <div className="px-[15px] w-[100%] flex justify-between items-center mb-[40px] text-[12px] font-[600]">
            <div className="total">
              <p className=" tracking-[0.75px]">
                <span className="text-[#0315ff] ">{filteredProductsCount}</span>
                &nbsp; PRODUCTS FOUND
              </p>
            </div>
            {price.map((p) => (
              <p>{p}</p>
            ))}
            <div className="sorting flex justify-between items-center">
              <p>SORT BY: </p>
              <div className="text-[14px] font-[400] cursor-pointer">
                &nbsp;&nbsp;HIGHEST RATE{" "}
              </div>
            </div>
          </div>
          <div className="container flex flex-wrap  justify-between w-[100%] mx-auto">
            {products &&
              products.map((product, index) => (
                <Product product={product} key={index} />
              ))}
          </div>
          {resultPerPage < filteredProductsCount && (
            <div className="px-[20px] mt-[50px] mb-[70px]">
              <Stack spacing={10}>
                <Pagination
                  color="primary"
                  size={"large"}
                  page={currentPage}
                  count={Math.ceil(filteredProductsCount / resultPerPage)}
                  shape="rounded"
                  onChange={(event, page) => setCurrentPageNo(page)}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;