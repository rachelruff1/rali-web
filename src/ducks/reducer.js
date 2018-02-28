import axios from "axios";

const initialState = {
  user: {},
  isLoading: false,
  didErr: false,
  networks: {}
};


const GET_USER = "GET_USER";
const GET_NETWORKS = "GET_NETWORKS";


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
export function getNetworks() {
  return {
    type: GET_NETWORKS,
    payload: axios
      .get("http://localhost:3000/api/getNetworks")
      .then(resp => {
        console.log('getNetworks reducer:', resp.data)
        return resp.data;
        
      })
      .catch(console.log)
  };
}

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
    console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        networks: action.payload
      });

    default:
      return state;
  }
}
