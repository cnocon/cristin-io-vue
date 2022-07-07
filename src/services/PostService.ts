/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
const VUE_APP_BUTTERCMS_API_TOKEN = process.env.VUE_APP_BUTTERCMS_API_TOKEN
// const butter = require("buttercms")(VUE_APP_BUTTERCMS_API_TOKEN);
import Butter from "buttercms"
const butter = Butter(VUE_APP_BUTTERCMS_API_TOKEN)

// const apiClient = axios.create({
//   baseURL: "https://api.buttercms.com/v2",
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getPosts({
    page,
    perPage,
    excludeBody,
  }: {
    page: number
    perPage: number
    excludeBody: boolean
  }) {
    return butter.post.list({
      page: page,
      pageSize: perPage,
      excludeBody: excludeBody,
    })
    // .then(function (response: any) {
    //   console.log(response);
    //   return response;
    // });
    // return apiClient.get(
    //   `/posts/?page=${page}&page_size=${perPage}&exclude_body=${excludeBody}&auth_token=${VUE_APP_BUTTERCMS_API_TOKEN}`
    // );
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getPost(payload: string) {
    return butter.post.retrieve(payload)
    // .catch((res) => {
    //   console.log(res);
    // });
  },
}
