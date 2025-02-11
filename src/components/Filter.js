import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  filterByDelievery,
  filterByRating,
  filterByStock,
  sortByPrice,
} from "../Redux/productSlice";

const Filter = () => {
  const { byStock, byFastDelivery, sort, byRating } = useSelector(
    (state) => state.product
  );
  const productDispatch = useDispatch();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => productDispatch(sortByPrice("lowToHigh"))}
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => productDispatch(sortByPrice("highToLow"))}
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDispatch(filterByStock())}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDispatch(filterByDelievery())}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ padding: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) => productDispatch(filterByRating(i + 1))}
          style={{ cursor: "Pointer" }}
        />
      </span>
      <Button bg="Primary" onClick={() => productDispatch(clearFilters())}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
