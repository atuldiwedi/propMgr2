import React, { useEffect, useRef, useState } from "react";
import { AddButton, FormContainer, Input } from "./PropertyForm.element";
import { useDispatch } from "react-redux";
import { addProperty } from "../../Store/propertySlice";
import axios from "axios";
import { headers, url } from "../../Global/Js/GlobalJs";

const PropertyForm = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const sizeRef = useRef();
  const imageRef = useRef();
  const dispatch = useDispatch();

  const AddProperty = () => {
    axios
      .post(
        `${url}/property.json`,
        {
          id: new Date().getTime().toString(),
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          size: sizeRef.current.value,
          image: imageRef.current.value,
        },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
        dispatch(addProperty());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <FormContainer>
        <Input type="text" placeholder="Name" ref={nameRef} />
        <Input type="text" placeholder="Image Url" ref={imageRef} />
        <Input
          type="text"
          placeholder="Description"
          ref={descriptionRef}
          width="2"
        />
        <Input type="number" placeholder="Size" ref={sizeRef} />
        <AddButton onClick={AddProperty}>Add Property</AddButton>
      </FormContainer>
    </>
  );
};

export default PropertyForm;
