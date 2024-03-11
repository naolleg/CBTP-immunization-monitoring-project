const query=require("../config/db")
const newsquery=require("../queries/news.queries")

const newsService = {
    getnews: async () => {
        const result = await query(newsquery.getnewsquery)
        return result
    },
    postnews: async (data) => {
        const result = await query(newsquery.postnewsquery, data)
        return result
    }
}
module.exports = newsService