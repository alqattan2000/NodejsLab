let myYoutubeVideo = {
    title: 'loops in javascript',
    videoLength: 15,
    videoCreator: 'Mohammed Qattan',
    videoDesc: 'this is a video desc and a long one'
};
let myYoutubeVideo2 = {
    title: 'Function in JavaScript',
    videoLength: 55,
    videoCreator: 'Mohammed Qattan',
    videoDesc: 'this is a video desc and a long one'
};
console.log(myYoutubeVideo);
console.log(`hey video author : ${myYoutubeVideo.videoCreator}`);


let changeVideoLength = (myObject) =>{
    console.log(`minutes  of this video is ${myObject.videoLength}`);
};
changeVideoLength(myYoutubeVideo2);



