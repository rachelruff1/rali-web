import axios from "axios";

const initialState = {
  user: {},
  isLoading: false,
  didErr: false,
  networks: {},
  networkName: "",
  networkSearch: "",
  networkPassword: "",
  networkSearchResults: [],
  myEvents: {},
  networkEvents: {},
  myNetworkEvents: [],
  allNetworkEvents: [],
  activeNetwork: {},
  eventDetail: {},
  googleAddress: ""
};

const GET_USER = "GET_USER";
const EDIT_USER = "EDIT_USER";
const LOGOUT = "LOGOUT";

const GET_NETWORK = "GET_NETWORK";
const GET_NETWORKS = "GET_NETWORKS";
const UPDATE_NETWORK_NAME = "UPDATE_NETWORK_NAME ";
const UPDATE_NETWORK_PASSWORD = "UPDATE_NETWORK_PASSWORD";
const CREATE_NETWORK = "CREATE_NETWORK";
const UPDATE_NETWORK_SEARCH = "UPDATE_NETWORK_SEARCH";
const PERFORM_SEARCH = "PERFORM-SEARCH";
const CLEAR_NETWORK_SEARCH = "CLEAR_NETWORK_SEARCH";
const VERIFY_NETWORK = "VERIFY_NETWORK";
const JOIN_NETWORK = "JOIN_NETWORK";
const LEAVE_NETWORK = "LEAVE_NETWORK";
const EDIT_NETWORK_NAME = "EDIT_NETWORK_NAME";
const EDIT_NETWORK_PASSWORD = "EDIT_NETWORK_PASSWORD";
const ADMIN_DELETE_NETWORK = "ADMIN_DELETE_NETWORK";

const GET_MY_NETWORK_EVENTS = "GET_MY_NETWORK_EVENTS";
const GET_ALL_NETWORK_EVENTS = "GET_ALL_NETWORK_EVENTS";
const CREATE_EVENT = "CREATE-EVENT";
const GET_EVENT = "GET_EVENT";
const ADMIN_DELETE_EVENT = "ADMIN_DELETE_EVENT";
const EDIT_EVENT = "EDIT_EVENT";
const JOIN_EVENT = "JOIN_EVENT";
const LEAVE_EVENT = "LEAVE_EVENT";
const UPDATE_GOOGLE_ADDRESS = "UPDATE_GOOGLE_ADDRESS";

///REDUCER FUNCTION

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
    // case EDIT_USER:
    //   return Object.assign({}, state, {user: action.payload})

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
    case UPDATE_NETWORK_SEARCH:
      return Object.assign({}, state, { networkSearch: action.payload });

    case `${PERFORM_SEARCH}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${PERFORM_SEARCH}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${PERFORM_SEARCH}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        networkSearchResults: action.payload
      });

    case CLEAR_NETWORK_SEARCH:
      return Object.assign({}, state, {
        networkSearchResults: []
      });

    case `${GET_NETWORK}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_NETWORK}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_NETWORK}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        activeNetwork: action.payload[0]
      });

    case `${VERIFY_NETWORK}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${VERIFY_NETWORK}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${VERIFY_NETWORK}_FULFILLED`:
      console.log(
        "action.payload:",
        action.payload,
        "joinedNetwork:",
        initialState.joinedNetwork
      );
      return Object.assign({}, state, {
        joinedNetwork: action.payload
      });

    //EVENTS

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

    case `${GET_EVENT}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_EVENT}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_EVENT}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        eventDetail: action.payload[0]
      });
    case UPDATE_GOOGLE_ADDRESS:
      return Object.assign({}, state, { googleAddress: action.payload });

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

export function editUser(user) {
  console.log("hit edit", user);
  //eventid, name, date, time, location, description
  return {
    type: EDIT_USER,
    payload: axios
      .put("/api/editUser/", { user })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios
      .get("/api/logout")
      .then(resp => resp.data)
      .catch(console.log)
  };
}

///NETWORK ACTIONS

export function getNetworks() {
  return {
    type: GET_NETWORKS,
    payload: axios
      .get("/api/getNetworks")
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
  // console.log("Reducer:", networkName, networkPassword);
  return {
    type: CREATE_NETWORK,
    payload: axios
      .post("/api/createNetwork", { networkName, networkPassword })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function updateNetworkSearch(networkSearch) {
  return {
    type: UPDATE_NETWORK_SEARCH,
    payload: networkSearch
  };
}

export function performSearch(networkSearch) {
  return {
    type: PERFORM_SEARCH,
    payload: axios
      .get(`/api/performSearch/?networkSearch=${networkSearch}`)
      .then(resp => {
        // console.log("performSearch reducer:", resp);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function clearNetworkSearch(networkSearch) {
  console.log("clearNetworkSearch hit");
  return {
    type: CLEAR_NETWORK_SEARCH,
    payload: networkSearch
  };
}

export function joinNetwork(networkid) {
  console.log(networkid);
  return {
    type: JOIN_NETWORK,
    payload: axios
      .post("/api/joinNetwork/", { networkid })
      .then(resp => {
        return resp.data;
      })
      .catch(console.log)
  };
}

export function leaveNetwork(userid, networkid) {
  console.log(userid, networkid);
  return {
    type: LEAVE_NETWORK,
    payload: axios
      .delete(`/api/leaveNetwork/${userid}/${networkid}`)
      .then(res => res.data)
      .catch(console.log)
  };
}

export function editNetworkName(networkid, name) {
  console.log("editnetworkname hit", networkid, name);

  return {
    type: EDIT_NETWORK_NAME,
    payload: axios
      .put("/api/editNetworkName", { networkid, name })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function editNetworkPassword(networkid, password) {
  console.log("editnetworkpass hit", networkid, password);

  return {
    type: EDIT_NETWORK_PASSWORD,
    payload: axios
      .put("/api/editNetworkPassword", { networkid, password })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function getNetwork(networkid) {
  console.log("getNetwork hit:", networkid);
  return {
    type: GET_NETWORK,
    payload: axios
      .get(`/api/getNetwork/${networkid}`)
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function adminDeleteNetwork(networkid) {
  console.log("deleteNet", networkid);
  return {
    type: ADMIN_DELETE_NETWORK,
    payload: axios
      .delete(`/api/adminDeleteNetwork/${networkid}`)
      .then(resp => resp.data)
      .catch(console.log)
  };
}

//EVENTS

export function getMyNetworkEvents(networkid) {
  return {
    type: GET_MY_NETWORK_EVENTS,
    payload: axios
      .get(`/api/getMyNetworkEvents/${networkid}`)
      .then(resp => {
        // console.log("getMyNetworkEvents reducer:", resp.data);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function getAllNetworkEvents(networkid) {
  return {
    type: GET_ALL_NETWORK_EVENTS,
    payload: axios
      .get(`api/getAllNetworkEvents/${networkid}`)
      .then(resp => {
        // console.log("getAllNetworkEvents reducer:", resp.data.name);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function createEvent(
  networkid,
  eventName,
  eventDate,
  eventTime,
  eventLocation,
  googleAddress,
  eventDescription
) {
  return {
    type: CREATE_EVENT,
    payload: axios
      .post("/api/createEvent", {
        networkid,
        eventName,
        eventDate,
        eventTime,
        eventLocation,
        googleAddress,
        eventDescription
      })
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function updateGoogleAddress(googleAddress) {
  return {
    type: UPDATE_GOOGLE_ADDRESS,
    payload: googleAddress
  };
}

export function getEvent(eventid) {
  console.log("hit getevent reducer:", eventid);
  return {
    type: GET_EVENT,
    payload: axios
      .get(`/api/getEvent/${eventid}`)
      .then(resp => {
        console.log(resp.data[0]);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function adminDeleteEvent(eventid) {
  return {
    type: ADMIN_DELETE_EVENT,
    payload: axios
      .delete(`/api/adminDeleteEvent/${eventid}`)
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function editEvent(eventid, name, date, time, location, description) {
  console.log("hit edit", name, date, time, location, description);
  //eventid, name, date, time, location, description
  return {
    type: EDIT_EVENT,
    payload: axios
      .put("/api/editEvent/", { eventid, name, date, time, location, description })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function joinEvent(eventid) {
  console.log("hit join", eventid);
  return {
    type: JOIN_EVENT,
    payload: axios
      .post("api/joinEvent", { eventid })
      .then(resp => resp.data)
      .catch(console.log)
  };
}

export function leaveEvent(eventid) {
  console.log("hit leave", eventid);
  return {
    type: LEAVE_EVENT,
    payload: axios
      .delete(`/api/leaveEvent/${eventid}`)
      .then(resp => resp.data)
      .catch(console.log)
  };
}
