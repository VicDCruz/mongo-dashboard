import React from "react";
import { Col, Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "Reporte al momento",
    vizState: {
      query: {
        "measures": [
          "Routers.count"
        ],
        "timeDimensions": [
          {
            "dimension": "Routers.createdAt",
            "dateRange": "Today"
          }
        ],
        "dimensions": [
          "Routers.formatTime"
        ],
        "filters": [],
        "timezone": 'America/Mexico_City',
        "order": {
          "Routers.formatTime": 'asc'
        }
      },
      chartType: "area"
    },
    size: 12
  },
  {
    id: 1,
    name: "Clientes acumulados al día de hoy",
    vizState: {
      query: {
        "measures": [
          "Routers.count"
        ],
        "timeDimensions": [
          {
            "dimension": "Routers.createdAt",
            "dateRange": "Today"
          }
        ],
        "dimensions": [],
        "filters": [],
        "timezone": 'America/Mexico_City',
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 2,
    name: "Reporte por fase de ayer",
    vizState: {
      query: {
        "timeDimensions": [
          {
            "dimension": "Routers.createdAt",
            "dateRange": "Yesterday",
            "granularity": "hour"
          }
        ],
        "dimensions": [
          "Routers.fase"
        ],
        "measures": [
          "Routers.count"
        ],
        "filters": [],
        "timezone": 'America/Mexico_City',
        "order": {
          "Routers.formatTime": 'asc'
        }
      },
      chartType: "line"
    },
    size: 20
  },
  {
    id: 3,
    name: "Reporte general de ayer",
    vizState: {
      query: {
        "measures": [
          "Routers.count"
        ],
        "timeDimensions": [
          {
            "dimension": "Routers.createdAt",
            "dateRange": "Yesterday"
          }
        ],
        "dimensions": [
          "Routers.formatTime"
        ],
        "filters": [],
        "timezone": 'America/Mexico_City',
        "order": {
          "Routers.formatTime": 'asc'
        }
      },
      chartType: "area"
    },
    size: 15
  },
  {
    id: 4,
    name: "Total de clientes de ayer",
    vizState: {
      query: {
        "measures": [
          "Routers.count"
        ],
        "timeDimensions": [
          {
            "dimension": "Routers.createdAt",
            "dateRange": "Yesterday"
          }
        ],
        "dimensions": [],
        "filters": [],
        "timezone": 'America/Mexico_City',
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 5,
    name: "Conexiones por sucursal de ayer",
    vizState: {
      "measures": [
        "Routers.count"
      ],
      "timeDimensions": [
        {
          "dimension": "Routers.createdAt",
          "dateRange": "Yesterday"
        }
      ],
      "dimensions": [
        "Routers.noeco"
      ],
      "filters": []
    },
    size: 12
  },
];

const DashboardPage = () => {
  const dashboardItem = item => (
    <Col
      span={24}
      lg={item.size}
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
      <h2>There are no charts on this dashboard</h2>
    </div>
  );

  return DashboardItems.length ? (
    <div
      style={{
        padding: "0 12px 12px 12px",
        margin: "10px 8px"
      }}
    >
      <Row
        style={{
          padding: "0 20px"
        }}
      ></Row>
      <Row>
        <Dashboard dashboardItems={DashboardItems}>
          {DashboardItems.map(dashboardItem)}
        </Dashboard>
      </Row>
    </div>
  ) : (
      <Empty />
    );
};

export default DashboardPage;
