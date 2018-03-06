import axios from "axios";

const initialState = {
  user: {},
  isLoading: false,
  didErr: false,
  networks: {},
  networkName: "",
  networkSearch: "",
  networkPassword: "",
  networkVerifyPassword: "",
  networkSearchResults: [],
  myEvents: {},
  networkEvents: {},
  optionJoinNetwork: false,
  myNetworkEvents: [],
  allNetworkEvents: [],
  eventName: "",
  eventDate: "",
  eventTime: "",
  eventLocation: "",
  eventDescription: "",
  eventDetail: {}
};

const GET_USER = "GET_USER";
const GET_NETWORKS = "GET_NETWORKS";
const UPDATE_NETWORK_NAME = "UPDATE_NETWORK_NAME ";
const UPDATE_NETWORK_PASSWORD = "UPDATE_NETWORK_PASSWORD";
const CREATE_NETWORK = "CREATE_NETWORK";
const UPDATE_NETWORK_SEARCH = "UPDATE_NETWORK_SEARCH";
const PERFORM_SEARCH = "PERFORM-SEARCH";
const UPDATE_OPTION_JOIN_NETWORK = "UPDATE_OPTION_JOIN_NETWORK";
const VERIFY_NETWORK = "VERIFY_NETWORK";
const UPDATE_VERIFY_NETWORK = "UPDATE_VERIFY_NETWORK";
const GET_MY_NETWORK_EVENTS = "GET_MY_NETWORK_EVENTS";
const GET_ALL_NETWORK_EVENTS = "GET_ALL_NETWORK_EVENTS";
const UPDATE_EVENT_NAME = "UPDATE_EVENT_NAME";
const UPDATE_EVENT_DATE = "UPDATE_EVENT_DATE";
const UPDATE_EVENT_TIME = "UPDATE_EVENT_TIME";
const UPDATE_EVENT_LOCATION = "UPDATE_EVENT_LOCATION";
const UPDATE_EVENT_DESCRIPTION = "UPDATE_EVENT_DESCRIPTION";
const CREATE_EVENT = "CREATE-EVENT";
const GET_EVENT = "GET_EVENT";
const ADMIN_DELETE_EVENT = 'ADMIN_DELETE_EVENT';
const EDIT_EVENT = 'EDIT_EVENT';

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

    case UPDATE_VERIFY_NETWORK:
      return Object.assign({}, state, {
        networkVerifyPassword: action.payload
      });
    case UPDATE_OPTION_JOIN_NETWORK:
      return Object.assign({}, state, {
        optionJoinNetwork: true
      });

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

    case UPDATE_EVENT_NAME:
      return Object.assign({}, state, {
        eventName: action.payload
      });
    case UPDATE_EVENT_DATE:
      return Object.assign({}, state, {
        eventDate: action.payload
      });
    case UPDATE_EVENT_TIME:
      return Object.assign({}, state, {
        eventTime: action.payload
      });
    case UPDATE_EVENT_LOCATION:
      return Object.assign({}, state, {
        eventLocation: action.payload
      });
    case UPDATE_EVENT_DESCRIPTION:
      return Object.assign({}, state, {
        eventDescription: action.payload
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

export function updateVerifyNetwork(networkVerifyPassword) {
  return {
    type: UPDATE_VERIFY_NETWORK,
    payload: networkVerifyPassword
  };
}

export function updateOptionJoinNetwork(optionJoinNetwork) {
  return {
    type: UPDATE_OPTION_JOIN_NETWORK,
    payload: optionJoinNetwork
  };
}

export function verifyNetwork(networkVerifyPassword, networkNameForVerify) {
  return {
    type: VERIFY_NETWORK,
    payload: axios
      .get(
        `/api/verifyNetwork/?networkVerifyPassword=${networkVerifyPassword}&networkNameForVerify=${networkNameForVerify}`
      )
      .then(resp => {
        console.log(resp);
        return resp;
      })
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

export function updateEventName(eventName) {
  return {
    type: UPDATE_EVENT_NAME,
    payload: eventName
  };
}

export function updateEventDate(eventDate) {
  return {
    type: UPDATE_EVENT_DATE,
    payload: eventDate
  };
}
export function updateEventTime(eventTime) {
  return {
    type: UPDATE_EVENT_TIME,
    payload: eventTime
  };
}
export function updateEventLocation(eventLocation) {
  return {
    type: UPDATE_EVENT_LOCATION,
    payload: eventLocation
  };
}
export function updateEventDescription(eventDescription) {
  return {
    type: UPDATE_EVENT_DESCRIPTION,
    payload: eventDescription
  };
}

export function createEvent(
  networkid,
  eventName,
  eventDate,
  eventTime,
  eventLocation,
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
        eventDescription
      })
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(console.log)
  };
}

export function getEvent(eventid) {
  // console.log('hit reducer:', eventid)
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
    }
}

export function editEvent(eventDetail){
  console.log('hit', eventDetail);
  return {
    type: EDIT_EVENT,
    payload: axios
    .put(`/api/editEvent/${eventDetail.eventid}`, eventDetail)
    .then(resp=>resp.data)
    .catch(console.log)
  }
}