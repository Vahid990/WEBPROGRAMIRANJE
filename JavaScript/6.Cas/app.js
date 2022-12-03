// Zadaci 
    let fragment = ["to","code"];
    let sentence =["Learning", ...fragment, "Is fun"];
// console.log(spreadOut)
console.log(sentence)
// 2.

let userActivity = {
    id: 23894201352,
    date:"January 1, 2017",
    data: {
        totalUsers:51,
        online:42,
    },
};
userActivity.data.online=50
console.log(userActivity.data.online)
// 3.
function forecast(arr) {
    return arr.slice(2,4)
}
console.log(
    forecast(["cold","rainy","warm","sunny","cool","thunderstorms"])
);