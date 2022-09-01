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
    console.log(Prop === null);
    axios
      .get(`${url}/property.json`)
      .then((res) => {
        console.log(res.data);
        setProp(res.data);
        console.log(Prop === null);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isChanged]);

  return (
    <>
      <PropertyForm />
      <PropertiesContainer>
        {Prop && Object.keys(Prop).length > 0 ? (
          Object.keys(Prop).map((property) => (
            <Property
              key={Prop[property].id}
              propertyId={property}
              property={Prop[property]}
            />
          ))
        ) : (
          <h3>No property listed</h3>
        )}
      </PropertiesContainer>
    </>
  );
};

export default Properties;
