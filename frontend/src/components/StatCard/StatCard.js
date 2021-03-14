import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  cardRoot: {
    boxShadow: "none",
    backgroundColor: (props) => props.backgroundColor,
  },
  cardContentRoot: {
    paddingBottom: "16px !important",
  },
  data: {
    color: (props) => props.color,
    fontFamily: "Oswald",
    fontSize: 40,
    lineHeight: "37px",
    marginBottom: 8,
  },
});

export default function StatCard({
  color,
  backgroundColor,
  icon,
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
      </CardContent>
    </Card>
  );
}
