import React from "react";
import { Button } from "@blueprintjs/core"

const CompaniesList = ({ companies = [], onJoinClick }) =>
  Array.isArray(companies) && companies.length ?
    <ul>
      {companies.map(company => (
        <li key={company.id}>
          {company.name}
          &nbsp;
          <Button icon="add" onClick={() => onJoinClick(company.id)} />
        </li>
      ))}
    </ul>
    : null;

export default CompaniesList;
