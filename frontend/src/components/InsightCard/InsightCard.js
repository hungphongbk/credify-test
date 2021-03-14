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

const useStyles = makeStyles({
  cardRoot: {
    width: 572,
  },
});

export default function InsightCard({}) {
  const styles = useStyles();
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
              data={100251}
              subtitle={"Total profit"}
            />
          </Grid>
          <Grid item xs={6}>
            <StatCard
              color={"#2f80ed"}
              backgroundColor={"#ddebff"}
              icon={UserAcquisitionIcon}
              data={12154}
              subtitle={"User acquisition"}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
