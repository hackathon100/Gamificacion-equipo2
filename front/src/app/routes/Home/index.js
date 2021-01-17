import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'components/CircularProgress';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Home = ({ openDialog }) => {
  const styles = {
    imgbox: {
      width: '800px',
      height: '400px',
    },
    infobox: {
      width: '400px',
    },
  };

  return (
    <div className="home-view-container container-fluid p-0">
      <h1 className="mb-2 font-size-48">Historia</h1>
      <Accordion defaultExpanded square={false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <span>Unidad 1 - De un mundo bipolar a un mundo globalizado: La guerra fría</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="d-flex flex-row">
            <div className="mr-5">
              <img
                src="https://lourdescardenal.files.wordpress.com/2017/01/senda7.png?w=600"
                alt="historia1.png"
                style={styles.imgbox}
              />
            </div>
            <div className="flex-column" style={styles.infobox}>
              <p>
                ¿Qué es el bien y el mal? Descubre los misterios del ser
                debatiendo con Aristóteles y otros notables personajes en
                tu primera misión. Suerte!
                ¿Qué es el bien y el mal? Descubre los misterios del ser
                debatiendo con Aristóteles y otros notables personajes en
                tu primera misión. Suerte!
              </p>
              <Button color="primary" variant="outlined" style={styles.infobox}>
                JUEGA YA
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled square={false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <span>Unidad 2 - Chile en el contexto de la Guerra Fría: transformaciones estructurales, polarización política y social y quiebre de la democracia</span>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
