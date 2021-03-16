import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiTheme } from "./const";
import "./App.css";
import styles from "./App.module.scss";
import InsightCard from "./components/InsightCard";
import { getData } from "./services";
import { zipWith } from "lodash";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const [
        { labels, data: profits },
        { data: userAcquisitions },
      ] = await Promise.all([
        getData("2021-01-01", "2021-12-31", "profit"),
        getData("2021-01-01", "2021-12-31", "user-acquisition"),
      ]);
      setData(
        zipWith(
          labels,
          profits,
          userAcquisitions,
          (label, profit, userAcquisition) => ({
            label,
            profit,
            userAcquisition,
          })
        )
      );
    }
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
  }, []);
  if (!data) return null;
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className={styles.App}>
        <InsightCard data={data} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
