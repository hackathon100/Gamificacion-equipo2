import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'components/CircularProgress';
import Button from '@material-ui/core/Button';
import { openDialog } from 'features/Common';
import Onboarding from 'components/Onboarding';

const Home = ({ openDialog }) => {
  useEffect(() => {
    openDialog(<Onboarding />);
  }, []);
  return (
    <div className="home-view-container container-fluid p-0">
      <h4 className="mb-3 subtitle">Historía</h4>
      <div>
        <p>
          ¿Qué es el bien y el mal? Descubre los misterios del ser debatiendo con Aristóteles y otros notables personajes en tu primera misión. Suerte!
        </p>
      </div>
      <div className="d-flex flex-row">
        <div style={{background: 'black', width: '50%', height: '400px'}} />
      </div>
      <Button color="primary" variant="contained">Juega Ya!</Button>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  openDialog: (content) => dispatch(openDialog(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
