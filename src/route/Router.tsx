import React from "react";
import { Switch, Route } from "react-router-dom";
import BasicContainer from "../pages/Basic/BasicContainer";
import TooltipContainer from "../pages/Toolptip/TooltipContainer";
import MultiSeriesContainer from "../pages/MultiSeries/MultiSeriesContainer";
import ResponsiveContainer from "../pages/Responsive/ResponsiveContainer";
import ChartColorContainer from "../pages/ChartColor/ChartColorContainer";
import ChartMethodContainer from "../pages/ChartMethod/ChartMethodContainer";
import { useToggleSidebar } from "../context/SidebarContext";
function Router() {
  const toggleSidebar = useToggleSidebar();
  return (
    <div
      style={{ padding: 8, display: "flex", justifyContent: "center" }}
      onClick={() => toggleSidebar(false)}
    >
      <Switch>
        <Route path="/basic" component={BasicContainer} />
        <Route path="/tooltip" component={TooltipContainer} />
        <Route path="/multi-series" component={MultiSeriesContainer} />
        <Route path="/responsive-chart" component={ResponsiveContainer} />
        <Route path="/chart-color" component={ChartColorContainer} />
        <Route path="/chart-method" component={ChartMethodContainer} />
      </Switch>
    </div>
  );
}

export default Router;
