import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";

import { deleteProduct, getAllProducts } from "../../actions/ProductAction.js";
// import { deleteProduct } from "../../actions/productsAction.js";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { logout } from "../../actions/AdminAction";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, products } = useSelector((state) => state.products);
  const {isAuthenticated}=useSelector((state)=>state.Admin);
 const adminL=localStorage.getItem('admin');
 console.log(adminL);

  //   const { isDeleted } = useSelector((state) => state.product);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
    navigate("/");
  };
  const handleClick = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    dispatch(getAllProducts());
      if (adminL === null) {
        navigate("/contact");
      }
  }, [dispatch,isAuthenticated,navigate]);

  

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 100, flex: 0.5 },
    // { field: "id", headerName: "ID", minWidth: 100, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    // {
    //   field: "stock",
    //   headerName: "Stock",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.3,
    // },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
            className="OfferButton"
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        // idd:item._id,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <div>.</div>
        <div className="ButtonContainerAdmin">
          <Link className="OfferedButton" to="/admin/create">
            ADMIN PAGE
          </Link>
          
        </div>
        <div className="ButtonCreate">
          <Link className="OfferButton" to="/admin/create">
            Products
          </Link>
          <Link className="OfferButton" to="/admin/adminenquiry">
            Enquiry
          </Link>
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "red",
              padding: "1px 6px",
              fontSize: "1.7rem",
            }}
            variant="contained"
            className="Button"
            onClick={handleClick}
          >
            LOGOUT
          </Button>
        </div>

        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
