const VUE_APP_BUTTERCMS_API_TOKEN = process.env.VUE_APP_BUTTERCMS_API_TOKEN
import Butter from "buttercms"

const butter = Butter(VUE_APP_BUTTERCMS_API_TOKEN)

export default {
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
      pageSize: perPage,
      page,
      excludeBody,
    })
  },
  getPost(payload: string) {
    return butter.post.retrieve(payload)
    // .catch((res) => {
    //   console.log(res);
    // });
  },
}
