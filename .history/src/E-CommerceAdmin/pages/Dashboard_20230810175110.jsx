/** @format */

import HOC from "../layout/HOC";
import { useNavigate } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import { Dropdown, Table } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();

  const card = [
    {
      progress: "bg-green-400",
      title: "Total Male",
      number: 100,
      icon: <i className="fa-solid fa-person text-2xl text-[#29cccc]"></i>,
      bg: "#29cccc",
      link: "#",
    },
    {
      progress: "bg-green-400",
      title: "Total Female",
      number: 100,
      icon: (
        <i className="fa-solid fa-person-dress   text-2xl text-[#3c335d]"></i>
      ),
      bg: "#3c335d",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "Total User",
      number: 200,
      icon: <i className="fa-solid fa-user text-2xl text-[#442d48]"></i>,
      bg: "#442d48",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "Active User",
      number: 20,
      icon: <i className="fa-solid fa-users text-2xl text-[#00755e]"></i>,
      bg: "#00755e ",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "Total Post",
      number: 20,
      icon: (
        <i className="fa-solid fa-address-card text-2xl text-[#124363]"></i>
      ),
      bg: "#124363 ",
      link: "/Product",
    },
  ];

  const series = [
    {
      name: "User",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];

  const options = {
    chart: {
      id: "area-chart",
    },
    xaxis: {
      categories: [12, 15, 16, 17, 18, 19, 20, 22, 25],
    },
  };

  const series1 = [
    {
      name: "Male",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Female",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options1 = {
    chart: {
      id: "area-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  };

  return (
    <>
      <Dropdown className="mb-3">
        <Dropdown.Toggle
          variant="secondary"
          style={{
            background: "#526bcf ",
            border: "1px solid #526bcf ",
            borderRadius: "0",
          }}
        >
          Active Users Per Day
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item> Active Users Per Day</Dropdown.Item>
          <Dropdown.Item> Active Users Per Hour</Dropdown.Item>
          <Dropdown.Item> Active Users Per Weekly</Dropdown.Item>
          <Dropdown.Item> Active Users Per Monthly</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{
                backgroundColor: `${card.bg}`,
                textTransform: "uppercase",
              }}
              onClick={() => navigate(`${card.link}`)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="two-chart">
        <div className="Main">
          <ReactApexChart
            options={options1}
            series={series1}
            type="area"
            height={350}
            width={"100%"}
          />{" "}
        </div>
        <div className="Main">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />{" "}
        </div>
      </div>

      <section
        className="sectionCont"
        style={{ width: "100%", display: "block", margin: "auto" }}
      >
        <div
          className="pb-4  w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            Top 50 Active User's ( Total : 10 )
          </span>
        </div>

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                <th>Country Code</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#2</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#3</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#4</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#5</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#6</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#7</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#8</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#9</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
              <tr>
                <td>#10</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Dashboard);