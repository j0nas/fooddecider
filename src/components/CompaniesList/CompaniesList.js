import React from "react";
import { Button } from "@blueprintjs/core"
import "./CompaniesList.css"

export const CompaniesList = ({ companies = [], onJoinClick }) =>
  Array.isArray(companies) && companies.length ?
    <ul className="companiesList__container">
      {companies.map(company => (
        <li key={company.id}>
          {company.name}
          &nbsp;
          <Button icon="add" onClick={() => onJoinClick(company.id)} />
        </li>
      ))}
    </ul>
    : null;
