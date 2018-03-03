import axios from "axios";

const initialState = {
  myNetworkEvents: {},
  allNetworkEvents: {}
};

const GET_MY_NETWORK_EVENTS = "GET_MY_NETWORK_EVENTS";
const GET_ALL_NETWORK_EVENTS = "GET_ALL_NETWORK_EVENTS";

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_MY_NETWORK_EVENTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_MY_NETWORK_EVENTS}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_MY_NETWORK_EVENTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        myNetworkEvents: action.payload
      });

    case `${GET_ALL_NETWORK_EVENTS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_ALL_NETWORK_EVENTS}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_ALL_NETWORK_EVENTS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        allNetworkEvents: action.payload
      });

    default:
      return state;
  }
}


export function getMyNetworkEvents() {
    return {
      type: GET_MY_NETWORK_EVENTS,
      payload: axios
        .get('/api/getMyNetworkEvents')
        .then(resp => {
          // console.log("getNetworks reducer:", resp.data);
          return resp.data;
        })
        .catch(console.log)
    };
  }

  export function getAllNetworkEvents() {
    return {
      type: GET_ALL_NETWORK_EVENTS,
      payload: axios
        .get("api/getMyNetworkEvents")
        .then(resp => {
          // console.log("getNetworks reducer:", resp.data);
          return resp.data;
        })
        .catch(console.log)
    };
  }