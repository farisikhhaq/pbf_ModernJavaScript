import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// const domainPath = 'http://localhost:3001';

const getNewsBlog = () => GetAPI(`posts?_sort=id&_order=desc`);
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);
const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

// const GetAPI = (path) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`)
//             .then(response => response.json())
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
//     return promise;
// }

// const DeleteAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`{$domainpath}/${path}/${data}`, { method: 'DELETE' })
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
// }
// const PostAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`, {
//             method: 'post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then((result) => {
//                 resolve(result);
//             }, (err) => {
//                 reject(err);
//             })
//     })
//     return promise;
// }
export default API;