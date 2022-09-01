import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteBtn,
  PropertyContainer,
  PropertyDescription,
  PropertyDetailContainer,
  PropertyImage,
  PropertyName,
  PropertySize,
} from "./Property.element";
import { url } from "../../Global/Js/GlobalJs";
import axios from "axios";
import { deleteProperty } from "../../Store/propertySlice";
const Property = ({ property, propertyId }) => {
  const dispatch = useDispatch();
  const DeleteProperty = (id) => {
    axios
      .delete(`${url}/property/${propertyId}.json`)
      .then((res) => {
        console.log(res);
        dispatch(deleteProperty());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <PropertyContainer>
      <PropertyImage src={property.image} />
      <PropertyDetailContainer>
        <PropertyName>{property.name}</PropertyName>
        <PropertySize>{property.size} sq.ft</PropertySize>
        <PropertyDescription>{property.description}</PropertyDescription>
        <DeleteBtn onClick={() => DeleteProperty(property.id)}>
          Delete
        </DeleteBtn>
      </PropertyDetailContainer>
    </PropertyContainer>
  );
};

export default Property;
