import React from "react";
import { FRNZ_InputProps } from "../../../types/ui.types";
import { countryCode_data } from "../../../libs/FRNZ_countries_info";

const FRNZ_Input_phone: React.FunctionComponent<FRNZ_InputProps> = () => {
  return (
    <div className="FRNZ_ui-Inputwrapper">
      {countryCode_data.map((item) => {
        if (item.country === "India") {
          return (
            <input
              key={item.id}
              checked={true}
              id={item.country}
              name="flag"
              type="radio"
            />
          );
        } else {
          return (
            <input key={item.id} id={item.country} name="flag" type="radio" />
          );
        }
      })}
      <input
        className="dropdown-checkbox"
        name="dropdown"
        id="dropdown"
        type="checkbox"
      />
      <label className="dropdown-container" htmlFor="dropdown"></label>
      <div className="input-wrapper">
        <legend>
          <label htmlFor="phonenumber">Phonenumber*</label>
        </legend>
        <div className="textfield">
          <input pattern="\d+" maxLength={10} id="phonenumber" type="text" />
          <span className="invalid-msg">This is not a valid phone number</span>
        </div>
      </div>
      <div className="select-wrapper">
        <ul>
          {countryCode_data.map((item) => {
            return (
              <li key={item.id} className={item.country}>
                <label htmlFor={item.country}>
                  <span>{item.id}</span>`${item.country} +${item.code}`
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FRNZ_Input_phone;
