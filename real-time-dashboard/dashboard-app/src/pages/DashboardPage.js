import React from "react";
import { Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "Ultimos 7 dias",
    vizState: {
      query: {
        measures: ["Routers.count"],
        timeDimensions: [
          {
            dimension: "Routers.createdAt",
            granularity: "hour",
            dateRange: "Last 7 days"
          }
        ],
        filters: [],
        timezone: "America/Mexico_City"
      },
      chartType: "line"
    }
  },
  {
    id: 1,
    name: "Total de los ultimos 7 dias",
    vizState: {
      query: {
        measures: ["Routers.count"],
        timeDimensions: [
          {
            dimension: "Routers.createdAt",
            dateRange: "Last 7 days"
          }
        ],
        filters: [],
        timezone: "America/Mexico_City"
      },
      chartType: "number"
    }
  },
  {
    id: 2,
    name: "Al dia de hoy",
    vizState: {
      query: {
        measures: ["Routers.count"],
        timeDimensions: [
          {
            dimension: "Routers.createdAt",
            granularity: "hour",
            dateRange: "Today"
          }
        ],
        filters: [],
        timezone: "America/Mexico_City"
      },
      chartType: "line"
    }
  },
  {
    id: 3,
    name: "Total de genero",
    vizState: {
      query: {
        measures: ["Routers.count"],
        timeDimensions: [
          {
            dimension: "Routers.createdAt",
            dateRange: "Today"
          }
        ],
        dimensions: ["Routers.genero"],
        filters: []
      },
      chartType: "table"
    }
  }
];

const DashboardPage = () => {
  const dashboardItem = item => (
    <Col
      span={24}
      lg={12}
      key={item.id}
      style={{
        marginBottom: "24px"
      }}
    >
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Col>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12
      }}
    >
      <h2>
        There are no charts on this dashboard. Use Playground Build to add one.
      </h2>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard dashboardItems={DashboardItems}>
      {DashboardItems.map(dashboardItem)}
    </Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
