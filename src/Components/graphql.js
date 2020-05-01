export const myQuery1 = `
    query{
    episodes(page: 1) {
      info {
        count
        pages
      }
      results {
        name
        id
        air_date
      }
    }
}`;

// fetch("https://rickandmortyapi.com/graphql", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     query: `{
//     episodes(page: 1) {
//       info {
//         count
//         pages
//       }
//       results {
//         name
//         id
//         air_date
//       }
//     }
// }`,
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res.data));
