module.exports = {
  isCourse: (user, courseId) => {
    // user:Object,
    // courseId:
    const result = user.courses.find((item) => +item.id === +courseId);
    return result ? true : false;
  },
};
