import type { NextPage } from "next";
import { Collapse } from "@mui/material";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";
import { Product } from "src/types/IProduct";
import AdminProductDetail from "src/components/AdminProductDetail";

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

const rows = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 100,
    quantity: 10,
    scent: "Floral",
    size: "Medium",
    weight: 500,
    imageUrl: "http://example.com/image1.jpg",
    category: "Category 1",
    rating: 4.5,
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-06-01"),
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 200,
    quantity: 5,
    scent: "Citrus",
    size: "Large",
    weight: 1000,
    imageUrl: "http://example.com/image2.jpg",
    category: "Category 2",
    rating: 4.0,
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-06-02"),
  },
  // Add more rows as needed
];

const Admin: NextPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedProduct(params.row);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="mt-[100px] w-100%">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection 
          onRowClick={params => handleRowClick(params)}
        />
      </div>
    </div>
  );
};

export default Admin;
