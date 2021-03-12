import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "red",
    borderRadd: 4,
  },
});

export const StyleComponenent = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};
