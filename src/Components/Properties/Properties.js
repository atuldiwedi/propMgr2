import React, { useState, useEffect } from "react";
import Property from "../Property/Property";
import PropertyForm from "../PropteryForm/PropertyForm";
import { PropertiesContainer } from "./Properties.element";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../Global/Js/GlobalJs";

const Properties = () => {
  const isChanged = useSelector((state) => state.property.isChanged);
  const [Prop, setProp] = useState({});
  useEffect(() => {
    axios
      .get(`${url}/property.json`)
      .then((res) => {
        console.log(res.data);
        setProp(res.data);

        Object.keys(Prop).map((property) => console.log(property));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isChanged]);

  return (
    <>
      <PropertyForm />
      <PropertiesContainer>
        {Object.keys(Prop).map((property) => (
          <Property
            key={Prop[property].id}
            propertyId={property}
            property={Prop[property]}
          />
        ))}
      </PropertiesContainer>
    </>
  );
};

export default Properties;
