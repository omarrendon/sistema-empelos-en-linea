import React from 'react'
import {Grid} from '@material-ui/core'
import styles from './index.styles';

function index() {
  const classes = styles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <header className={classes.header}>
            <h2>Empleos en Linea</h2>
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                class="svg--sm"
                fill="white"
                points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
              />
              <polygon
                class="svg--lg"
                fill="white"
                points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
              />
            </svg>
          </header>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          CENTER CONTENT
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          DOWN CONTENT
        </Grid>
      </Grid>
    </div>
  );
}

export default index
