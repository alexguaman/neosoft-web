import React, { useEffect, useState } from "react";
import ClientItem from "@components/ClientItem";
import "@styles/ClientList.scss";
import useGetClients from "../hooks/useGetClient";

const API = "http://localhost:8090/neosoft-api/clientes/";

const ClientList = () => {
  const clients = useGetClients(API);

  return (
    <section className="main-container">
      <div className="ClientList">
        <table>
		<thead>
			<tr>
			<th scope="col">Id</th>
			<th scope="col">Nombres</th>
			<th scope="col">Email</th>
			<th scope="col">Edad</th>
			</tr>
		</thead>
		<tbody>
          {clients.map((client) => (
            <ClientItem client={client} key={client.clienteid} />
          ))}
		</tbody>
        </table>
      </div>
    </section>
  );
};

export default ClientList;
