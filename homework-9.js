import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.slice (4 , 11);

const kitchenAppliances = ["ножницы", "нож", "ложка", "вилка"];
const hasKnife = kitchenAppliances.includes ("нож");

const reversArrays = (arr) => {
  arr.reverse ()
};

const filterEmail = comments.filter (commenst => commenst.email.includes (".com") );
console.log (filterEmail);

const commentsWithPostId = comments.map ((comment) => { 
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

const filteredCommentsByIdName = comments.map ((comment) => {
 return { 
  id : comment.id,
  name : comment.name
};
});

const validatedComments = comments.map ((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180 ? true : false
  };
});

const emailsByReduce = comments.reduce((acc, comment) => {
  return [
    ...acc,
    comment.email
  ];
}, []);

const emails2ByMap = comments.map ((comment) => {
  return { 
    email: comment.email
};
});

console.log (emailsByReduce.toString ());
console.log (emailsByReduce.join ("---"));
