import type { NextPage } from "next";
import { Button, Collapse } from "@mui/material";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import AdminNavbar from "../components/AdminNavbar";
import { useEffect, useState } from "react";
import { Product } from "src/types/IProduct";
import AdminProductDetail from "src/components/AdminProductDetail";
import productService from "src/helpers/product-service/api-wrappers";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 90 },
  { field: "scent", headerName: "Scent", width: 130 },
  { field: "size", headerName: "Size", width: 130 },
  { field: "weight", headerName: "Weight", type: "number", width: 90 },
  { field: "imageUrl", headerName: "Image URL", width: 200 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "rating", headerName: "Rating", type: "number", width: 90 },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 160,
    valueGetter: (params) => new Date(params).toLocaleString(),
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 160,
    valueGetter: (params) => new Date(params).toLocaleString(),
  },
];

const Admin: NextPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddingProduct, setIsAddingProduct] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const getProducts = async () => {
    try {
      const products = await productService.getProducts();
      setProducts(products);
      setLastPage(Math.ceil(products.length / 6));
    } catch (err) {
      console.log("error fetching products", err);
    }
  };

  const createProduct = async (product: Product) => {
    try {
      await productService.createProduct(product);
    } catch (err) {
      console.log("error creating product", err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await getProducts();
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedProduct(params.row);
  };

  return (
    <div>
      {isAddingProduct ? (
        <div>
          <div className="relative justify-center items-center">
            <div className="absolute justify-center items-center bg-white w-[400px] h-[400px] shadow-lg">
              this is a form lk12k4l1l2k4
            </div>
          </div>
          <div className="opacity-50">
            <AdminNavbar />
            <div className="mt-[100px] w-100%">
              <DataGrid
                getRowId={(product) => product._id}
                rows={products}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowClick={(params) => handleRowClick(params)}
              />
            </div>
            <Button
              className="h-[45px] flex-[0.9375] min-w-[83px] mq450:flex-1 max-w-[130px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#facfad",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#f5ac72" },
                height: 45,
              }}
              onClick={() => setIsAddingProduct(true)}
            >
              Add product
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <AdminNavbar />
          <div className="mt-[100px] w-100%">
            <DataGrid
              getRowId={(product) => product._id}
              rows={products}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              onRowClick={(params) => handleRowClick(params)}
            />
          </div>
          <Button
            className="h-[45px] flex-[0.9375] min-w-[83px] mq450:flex-1 max-w-[130px]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#facfad",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#f5ac72" },
              height: 45,
            }}
            onClick={() => setIsAddingProduct(true)}
          >
            Add product
          </Button>
        </div>
      )}
    </div>
  );
};

export default Admin;
