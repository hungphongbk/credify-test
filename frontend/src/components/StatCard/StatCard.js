import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  cardRoot: {
    boxShadow: "none",
    backgroundColor: (props) => props.backgroundColor,
  },
  cardContentRoot: {
    paddingBottom: "16px !important",
    position: "relative",
  },
  data: {
    color: (props) => props.color,
    fontFamily: "Oswald",
    fontSize: 40,
    lineHeight: "37px",
    marginBottom: 8,
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default function StatCard({
  color,
  backgroundColor,
  icon: Icon,
  data = 0,
  subtitle = "",
}) {
  const styles = useStyles({ color, backgroundColor });
  return (
    <Card classes={{ root: styles.cardRoot }}>
      <CardContent className={styles.cardContentRoot}>
        <Typography className={styles.data}>
          ${data.toLocaleString()}
        </Typography>
        <span>{subtitle}</span>
        <Icon className={styles.icon} />
      </CardContent>
    </Card>
  );
}
