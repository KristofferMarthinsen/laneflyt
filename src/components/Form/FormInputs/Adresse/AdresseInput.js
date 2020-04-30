import React, { useState } from "react";
import { Input } from "@staccx/bento";
import styled from "styled-components";
import { ErrorMessage, useFormikContext } from "formik";
import PlacesAutocomplete from "react-places-autocomplete";

const AdresseInput = () => {
  const { setFieldValue } = useFormikContext();
  const [adress, setAdress] = useState(""); //For google autocomplete

  const handleSelect = () => {
	setFieldValue("Adresse" , adress)
  };
  //console.log(adress +"hei")


  return (
    <div>
      <PlacesAutocomplete
        value={adress}
        onChange={setAdress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <StyledInput
              location={"suggestWords"}
			  value={adress}
              //onChange={() => console.log(adress)}
              label="Adresse"
              {...getInputProps({ placeholder: "Skriv adresse" })}
            />
            <div>{loading ? <div>...loading</div> : null}

			{suggestions.map(suggestion => {

				const style = {
					backgroundColor: suggestion.active ? "#4abff1" : "#fff"
				}

				return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
			})}

			</div>


          </div>
        )}
      </PlacesAutocomplete>
      <ErrorMessage name="Adresse">
        {msg => console.log(msg) || <Error>{msg}</Error>}
      </ErrorMessage>
    </div>
  );
};
const Error = styled.div`
  color: red;
`;
const StyledInput = styled(Input)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export default AdresseInput;
