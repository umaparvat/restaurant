import { connect } from "react-redux";
import ToggleTable from "../components/ToggleTable.jsx";
import toggleTable from "../actions/toggleTable.js";
import incrementMoneyEarned from "../actions/incrementMoneyEarned.js";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};
const ToggleTableContainer = connect()(ToggleTable);

export default ToggleTableContainer;
