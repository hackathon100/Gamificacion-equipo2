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
      <h1 className="mb-3 subtitle">Historía</h1>
      <div style={{width: '800px',}}>
        <p>
          ¿Qué es el bien y el mal? Descubre los misterios del ser
          debatiendo con Aristóteles y otros notables personajes en
          tu primera misión. Suerte!
        </p>
      </div>
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
            JUEGA YA MALDICION!
          </Button>
        </div>
      </div>
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
