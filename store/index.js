import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      customers: [],
      merchants: [],
      orders: [],
      adminToken: null
    },
    mutations: {
      updateCustomers(state, data) {
        state.customers = data;
      },
      updateMerchants(state, data) {
        state.merchants = data;
      },
      updateOrders(state, data) {
        state.orders = data;
      },
      updateToken(state, data) {
        state.adminToken = data;
      }
    },
    actions: {
      submitProduct(vuexContext, productData) {
        /*var formData = new FormData();
        var details = JSON.stringify(productData);
        console.log(details, "this is a test");
        formData.append("details", details);*/
        console.log(productData);
        axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lcmR5ZW1tYW51ZWwyQGdtYWlsLmNvbSIsImlkIjoxOCwidGltZSI6IjIwMjEtMDItMjFUMTU6NTM6MTMuNzQ5WiIsImlhdCI6MTYxMzkyMjc5MywiZXhwIjoxNjEzOTQ0MzkzfQ.GmWhFP-K8DC5gJMAjD4c8xzzO3cv8p5kQXL8M-grlx0"
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createProduct",
          data: productData
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      },
      getCustomers({ commit, state }) {
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: state.adminToken
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/getAllSystemUsers"
        })
          .then(res => {
            //console.log(res.data.data);
            const data = res.data.data;
            //return data;
            commit("updateCustomers", data);
          })
          .catch(err => {
            console.log("there is an error", err);
          });
      },
      createMerchant({ commit, state }, data) {
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: state.adminToken
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createMerchant",
          data: data
        });
      },
      getMerchants({ commit, state }) {
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: state.adminToken
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/getMerchants"
        })
          .then(res => {
            //console.log(res.data.data);
            const data = res.data.data;
            //return data;
            console.log(data);
            commit("updateMerchants", data);
          })
          .catch(err => {
            console.log("there is an error", err);
          });
      },
      getOrders({ commit, state }) {
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: state.adminToken
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/getOrders"
        })
          .then(res => {
            //console.log(res.data.data);
            const data = res.data.data;
            //return data;
            console.log(data);
            commit("updateOrders", data);
          })
          .catch(err => {
            console.log("there is an error", err);
          });
      },
      acceptOrder({ commit, state }, data) {
        axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: state.adminToken
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/confirmOrder",
          data: data
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err, "this is a err");
          });
      },
      cancelOrder({ commit, state }, data) {
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: state.adminToken
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/cancelOrder",
          data: {
            order_id: data
          }
        });
      },
      authSignUp({ commit, state }, data) {
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createAdmin",
          data: data
        });
      },
      authSignIn({ commit, state }, data) {
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/login",
          data: data
        })
          .then(res => {
            console.log(res.data.data, "signed in");
            const token = res.data.data.token;
            commit("updateToken", token);
          })
          .catch(err => {
            console.log(err, "this is a err");
          });
      }
    },
    getters: {
      customers(state) {
        return state.customers;
      },
      merchants(state) {
        return state.merchants;
      },
      orders(state) {
        return state.orders;
      },
      adminToken(state) {
        return state.adminToken;
      }
    }
  });
};

export default createStore;
