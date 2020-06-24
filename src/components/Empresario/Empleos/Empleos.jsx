import React from "react";
import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";
import styles from "./Empleos.style";

function Empleos() {
  const classes = styles();
  return (
    <Grid container item xs={12} sm={12} md={12} className={classes.root}>
      <Grid item className={classes.card}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h3" color="secondary">
              Mis Empleos
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Card variant="outlined">
                  <CardContent>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi totam neque sapiente placeat id enim aperiam,
                      voluptas ex architecto eaque unde vero perspiciatis earum
                      impedit molestias at eos alias tenetur.
                    </p>
                    <Button color="secondary">Ver</Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Empleos;
