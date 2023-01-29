import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";

import { deleteProduct, getAllProducts } from "../../actions/ProductAction.js";
import { deleteEnquiry, getAllEnquiry } from "../../actions/EnquiryAction";

// import { deleteProduct } from "../../actions/productsAction.js";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const AdminEnquiry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, products } = useSelector((state) => state.products);
  const {enquiry} =useSelector((state)=>state.enquiryReducer);

  //   const { isDeleted } = useSelector((state) => state.product);

  const deleteEnquiryHandler = (id) => {
    // dispatch(deleteEnquiry(id));
    dispatch(deleteEnquiry(id));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getAllEnquiry());
  }, []);


  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 100, flex: 0.5 },
    // { field: "id", headerName: "ID", minWidth: 100, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 150,
      flex: 0.3,
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
            <Button
              onClick={() =>
                deleteEnquiryHandler(params.getValue(params.id, "id"))
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

  enquiry &&
    enquiry.forEach((item) => {
      rows.push({
        id: item._id,
        // idd:item._id,
        type:item.type,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <div>.</div>
        <div className="ButtonContainerAdmin">
          <Link className="OfferedButton" to="/admin/enquiry">
            CREATE ENQUIRY
          </Link>
        </div>
      

        <div className="productListContainer">
          <h1 id="productListHeading">ALL ENQUIRIES</h1>

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

export default AdminEnquiry;
