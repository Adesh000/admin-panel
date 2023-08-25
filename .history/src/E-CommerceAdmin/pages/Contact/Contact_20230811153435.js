/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const Contact = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/help"
      );
      setData(response.data.message);
      setTotal(response.data.message.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `https://smoke-backend.vercel.app/api/v1/help/delete/${id}`
      );
      const msg = response.data.message;
      toast.success(msg);
      fetchHandler();
    } catch {}
  };

  return (
    <>
      <section>
        <p className="headP">Dashboard / Help and Support</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All help and support ( Total : {total} )
          </span>
        </div>

        <section className="sectionCont">
          <div className="overFlowCont">
          {data?.length === 0 || !data ? <Alert>No Queries Yet ! </Alert> : }
        
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(Contact);
