import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core'
import '../Card/styles.css';




const useStyles = makeStyles((theme) => ({
  eachCard: {
    width: 350,
    alignItems: 'center',
    margin: 'auto',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    margin: 15,
    float: 'left',
  },
}));

function Card1(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
<div>
  <Card className={classes.eachCard}>

  {/* <CardHeader
      avatar={
        <Avatar aria-label="eachUser" className={classes.avatar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </Avatar>
      } 
      title={props.name}
      subheader={props.role} 
      subtitle2={props.email}>
  </CardHeader>

  <CardContent>
      <Typography>
      {props.email}
      </Typography>
  </CardContent> */}

  <CardContent className="cardCont">
  <Avatar aria-label="eachUser" className={classes.avatar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  </Avatar>
    <Typography variant="h6" component="h2">
      {props.name}
    </Typography>
    <Typography className={classes.pos} color="textSecondary">
        {props.role}
    </Typography>
    <Typography variant="body2" component="" className="email">
      {props.email}
    </Typography>
  </CardContent>

  <CardActions disableSpacing>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more">
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>

  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography varient="h5" color="textPrimary">Additional Information:</Typography>
      <Typography>
        {props.street}
      </Typography>
      <Typography >
        {props.city}
      </Typography>
      <Typography >
        {props.phone}
      </Typography>
    </CardContent>
  </Collapse>
  </Card>
  <br />
</div>

    
  );
}

export default Card1;