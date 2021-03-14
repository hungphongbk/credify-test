import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    fontFamily: "Roboto Slab",
    fontSize: 12,
  },
  overrides: {
    MuiCard: {
      root: { borderRadius: 20 },
    },
    MuiCardHeader: {
      root: {
        borderBottom: "1px solid #f1f1f1",
      },
      title: {
        fontFamily: "Oswald",
        fontSize: 16,
      },
    },
  },
});
