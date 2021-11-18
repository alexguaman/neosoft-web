import React, { useState } from "react";
import "@styles/ClientItem.scss";

const ClientItem = ({ client }) => {
  return (
    <tr>
		  <td>{client.clienteid}</td>
          <td>{client.nombres}</td>
          <td>{client.email}</td>
          <td>{client.edad}</td>
        
    </tr>
  );
};

export default ClientItem;
