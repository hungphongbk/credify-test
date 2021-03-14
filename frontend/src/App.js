import { MuiThemeProvider } from "@material-ui/core";
import { MuiTheme } from "./const";
import "./App.css";
import styles from "./App.module.scss";
import InsightCard from "./components/InsightCard";
function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className={styles.App}>
        <InsightCard />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
