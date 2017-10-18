import HomeContainer from './homeContainer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
  });
}

const mapDispatchToProps = {
 }

const HomePage = connect(
    null,
    null
)(HomeContainer);

export default HomePage;