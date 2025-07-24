// const asyncHandler = () => {}
// const asyncHandler = (func) => {}=>{}
// const asyncHandler = (func) => async {}=>{} correct structure for async handler to handle async errors


// 1) FIRST WAY: Using an arrow function with async

// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message 
//         })
//     }
// }

// 2) SECOND WAY: Using a regular function with async

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  }
}

export {  asyncHandler }


