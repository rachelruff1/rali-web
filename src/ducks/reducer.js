import axios from "axios";

const initialState = {
  user: {},
  isLoading: false,
  didErr: false,
  networks: {},
  networkName: "",
  networkPassword: ""
};

const GET_USER = "GET_USER";
const GET_NETWORKS = "GET_NETWORKS";
const UPDATE_NETWORK_NAME = "UPDATE_NETWORK_NAME ";
const UPDATE_NETWORK_PASSWORD = "UPDATE_NETWORK_PASSWORD";
const CREATE_NETWORK = "CREATE_NETWORK";

///REDUCER FUNTION

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });
    case `${GET_NETWORKS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_NETWORKS}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_NETWORKS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        networks: action.payload
      });
    case UPDATE_NETWORK_NAME:
      return Object.assign({}, state, { networkName: action.payload });
    case UPDATE_NETWORK_PASSWORD:
      return Object.assign({}, state, { networkPassword: action.payload });

    default:
      return state;
  }
}

//USER ACTIONS

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/getUser")
      .then(resp => {
        // console.log('getUser reducer:', resp.data);
        return resp.data[0];
      })
      .catch(console.log)
  };
}

///NETWORK ACTIONS

export function getNetworks() {
  return {
    type: GET_NETWORKS,
    payload: axios
      .get("http://localhost:3000/api/getNetworks")
      .then(resp => {
        // console.log("getNetworks reducer:", resp.data);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function updateNetworkName(networkName) {
  return {
    type: UPDATE_NETWORK_NAME,
    payload: networkName
  };
}

export function updateNetworkPassword(networkPassword) {
  return {
    type: UPDATE_NETWORK_PASSWORD,
    payload: networkPassword
  };
}

export function createNetwork(networkName, networkPassword) {
  return {
    type: CREATE_NETWORK,
    payload: axios
      .post("/api/createNetwork", { networkName, networkPassword }, console.log('Reducer:', networkName, networkPassword))
      .then(resp => resp.data)
      .catch(console.log)
  };
}