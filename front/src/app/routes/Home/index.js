import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'components/CircularProgress';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Cap1 from 'assets/images/cap-1.png';
import Link from '@material-ui/core/Link'

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      className="mb-2"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

const Home = ({ openDialog }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mission-view-container container-fluid p-0">
      <h1 className="mb-2 font-size-48">Historia, Geografía y Ciencias Sociales</h1>
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
                className="cap-1"
                src={Cap1}
                alt="cap-1"
              />
            </div>
            <div className="w-50 flex-column">
              <p>
                Hechicer@, debemos viajar al año 1962 del planeta Tierra, a un periodo conocido como LA GUERRA FRÍA. Debemos encontrar “EL TELÉFONO ROJO”, un artefacto que alberga grandes cantidades de magia multiversal.
              </p>
              <p>
                ¿Quieres ser un influyente asesor del EXCOM del presidente Kennedy en los Estados Unidos de Norteamérica? ¿o prefieres desempeñarte como un importante camarada del Presidium del Secretario General Kruschev en la Unión de Repúblicas Socialistas Soviéticas? Tú decides que papel desempeñaremos.
              </p>
              <Tabs color="primary" className="mb-3" value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Objetivo de aprendizaje" />
                <Tab label="Contenidos clave" />
                <Tab label="Indicadores de Evaluación:" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <p>
                  Analizar la Guerra Fría como la confrontación ideológica de dos proyectos antagónicos que, bajo la amenaza del enfrentamiento nuclear, se manifestó en distintos escenarios locales, y dar ejemplos de cómo afectó diversas esferas, como la política, la cultura, el deporte y las ciencias.
                </p>
              </TabPanel>
              <TabPanel value={value} index={1}>
                #Guerra Fría #Mundo Bipolar #EE.UU #URSS #Destrucción Mutua Asegurada #diplomacia
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ul>
                  <li>
                    Ejemplifican ámbitos en los que se refleja el enfrentamiento entre ambos bloques/ potencias.
                  </li>
                  <li>
                    Analizan la motivación de ambas superpotencias por la superioridad en el ámbito científico, y los efectos en distintos planos, demostrando valoración por el aporte de las ciencias sociales a la comprensión de la realidad humana y su complejidad.
                  </li>
                </ul>
              </TabPanel>
              <a target="_blank" href="http://localhost:3006/">
                <Button color="primary" variant="contained" className="w-100">
                  ¡JUEGA YA!
                </Button>
              </a>
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
      <Accordion disabled square={false}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <span>Unidad 3 - Dictadura militar, transición política y consenso en torno a la democracia en el Chile actual</span>
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
