import React from "react";
import { Center } from "../Styles/loginCard";
import {
  DasboardCard,
  MinCard,
  GraphContainer,
  Row,
} from "../Styles/dashboard";
import Chart from "react-google-charts";

export default function dashboard() {
  return (
    <>
      <Center>
        <DasboardCard>
          <Row>
            <GraphContainer>
              <MinCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay icon"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>

                <div className="number">20</div>
                <div className="information">Mesas</div>
              </MinCard>
              <MinCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay icon"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>

                <div className="number">10</div>
                <div className="information">Salas</div>
              </MinCard>
              <MinCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell icon"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>

                <div className="number">0</div>
                <div className="information">Alertas</div>
              </MinCard>
              <MinCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay icon"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>

                <div className="number">-</div>
                <div className="information">Adicionar Locais</div>
              </MinCard>
              <MinCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay icon"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>

                <div className="number">-</div>
                <div className="information">Adicionar Sala</div>
              </MinCard>
              <MinCard>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-airplay icon"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>

                <div className="number">-</div>
                <div className="information">
                  Exportar Estatística
                  <br /> de Uso
                </div>
              </MinCard>
            </GraphContainer>
            <GraphContainer>
              <Chart
                width={"100%"}
                height={"300px"}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Hora", "Ambientes"],
                  ["8:00", 2],
                  ["9:00", 5],
                  ["10:00", 15],
                  ["11:00", 13],
                  ["12:00", 9],
                  ["13:00", 18],
                  ["14:00", 9],
                  ["15:00", 18],
                ]}
                options={{
                  title: "Ocupação dos Ambientes",
                  hAxis: { title: "Hora", titleTextStyle: { color: "#333" } },
                  vAxis: { title: "Ocupação", minValue: 0 },
                  // For the legend to fit, we make the chart area smaller
                  // lineWidth: 25
                  series: {
                    0: { color: "#1d4657" },
                  },
                }}
                // For tests
                rootProps={{ "data-testid": "1" }}
              />
            </GraphContainer>
          </Row>
          <Row>
            <GraphContainer>
              <Chart
                width={"100%"}
                height={"300px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Tipo", "%"],
                  ["Mesas Ocupadas", (11 / 30) * 100],
                  ["Mesas Livres", (9 / 30) * 100],
                  ["Salas Ocupadas", (3 / 30) * 100],
                  ["Salas Livres", (7 / 30) * 100],
                ]}
                options={{
                  title: "Ocupação dos Locais",
                  // Just add this option
                  pieHole: 0.4,
                  series: {
                    0: { color: "#1d4657" },
                    1: { color: "#DB8B32" },
                  },
                  colors: ["#1d4657", "#DB8B32", "#2783A8", "#7DC738"],
                }}
                rootProps={{ "data-testid": "3" }}
              />
            </GraphContainer>
            <GraphContainer>
              <Chart
                width={"500px"}
                height={"300px"}
                chartType="TreeMap"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    "Location",
                    "Parent",
                    "Market trade volume (size)",
                    "Market increase/decrease (color)",
                  ],
                  ["Global", null, 0, 0],
                  ["Zona 1", "Global", 0, 0],
                  ["Zona 2", "Global", 0, 0],
                  ["Zona 3", "Global", 0, 0],
                  ["Zona 4", "Global", 0, 0],
                  ["Pavilhão de Aulas 1", "Global", 0, 0],
                  ["Pavilhão de Aulas 2", "Global", 0, 0],
                  ["Mesa 00", "Zona 1", 2, 1],
                  ["Mesa 01", "Zona 1", 2, 1],
                  ["Mesa 02", "Zona 1", 2, 1],
                  ["Mesa 03", "Zona 1", 2, 0],
                  ["Mesa 04", "Zona 2", 2, 1],
                  ["Mesa 05", "Zona 2", 2, 0],
                  ["Mesa 06", "Zona 2", 2, 1],
                  ["Mesa 07", "Zona 2", 2, 0],
                  ["Mesa 08", "Zona 2", 2, 1],
                  ["Mesa 09", "Zona 3", 2, 0],
                  ["Mesa 10", "Zona 3", 2, 1],
                  ["Mesa 11", "Zona 3", 2, 0],
                  ["Mesa 12", "Zona 3", 2, 1],
                  ["Mesa 13", "Zona 3", 2, 0],
                  ["Mesa 14", "Zona 3", 2, 1],
                  ["Mesa 15", "Zona 3", 2, 0],
                  ["Mesa 16", "Zona 4", 2, 0],
                  ["Mesa 17", "Zona 4", 2, 1],
                  ["Mesa 18", "Zona 4", 2, 0],
                  ["Mesa 19", "Zona 4", 2, 1],
                  ["Mesa 20", "Zona 4", 2, 0],
                  ["Sala A19", "Pavilhão de Aulas 1", 4, 1],
                  ["Sala A20", "Pavilhão de Aulas 1", 4, 0],
                  ["Sala B15", "Pavilhão de Aulas 1", 4, 0],
                  ["Sala A01", "Pavilhão de Aulas 1", 4, 0],
                  ["Sala A12", "Pavilhão de Aulas 1", 4, 0],
                  ["Sala B20", "Pavilhão de Aulas 1", 4, 0],
                  ["Mesa P01", "Pavilhão de Aulas 1", 4, 0],
                ]}
                options={{
                  minColor: "#1d4657",
                  midColor: "#fff",
                  maxColor: "#DB8B32",
                  headerHeight: 15,
                  fontColor: "black",
                  showScale: true,
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </GraphContainer>
          </Row>
        </DasboardCard>
      </Center>
    </>
  );
}
