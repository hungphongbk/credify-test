import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import StatCard from "../StatCard";
import { ReactComponent as ProfitIcon } from "../../assets/ProfitIcon.svg";
import { ReactComponent as UserAcquisitionIcon } from "../../assets/UserAcquisitionIcon.svg";
import { Chart } from "../Chart";

const useStyles = makeStyles({
    cardRoot: {
      width: 572,
    },
  }),
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  getMonth = (str) => str.split("-")[1] * 1;

export default function InsightCard({ data = [] }) {
  const styles = useStyles(),
    totalProfit = React.useMemo(() => {
      return data.reduce((acc, val) => acc + val.profit, 0);
    }, [data]),
    totalAcquisition = React.useMemo(() => {
      return data.reduce((acc, val) => acc + val.userAcquisition, 0);
    }, [data]),
    dataForGraph = React.useMemo(() => {
      return Object.entries(
        data.reduce((acc, val) => {
          const month = months[getMonth(val.label) - 1];
          if (!acc[month])
            acc[month] = {
              profit: val.profit,
              userAcquisition: val.userAcquisition,
            };
          else {
            acc[month].profit += val.profit;
            acc[month].userAcquisition += val.userAcquisition;
          }
          return acc;
        }, {})
      ).map(([key, val]) => ({ month: key, ...val }));
    }, [data]);
  return (
    <Card classes={{ root: styles.cardRoot }}>
      <CardHeader title={"Organization Earning"} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StatCard
              color={"#9147d7"}
              backgroundColor={"#f0e9f9"}
              icon={ProfitIcon}
              data={"$" + totalProfit.toLocaleString()}
              subtitle={"Total profit"}
            />
          </Grid>
          <Grid item xs={6}>
            <StatCard
              color={"#2f80ed"}
              backgroundColor={"#ddebff"}
              icon={UserAcquisitionIcon}
              data={totalAcquisition.toLocaleString()}
              subtitle={"User acquisition"}
            />
          </Grid>
        </Grid>
        <Chart data={dataForGraph} />
      </CardContent>
    </Card>
  );
}
