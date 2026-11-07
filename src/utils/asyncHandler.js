const asyncHandler=async(requestJHandler)=>{
     (req,res,next)=>{
        Promise.resolve(requestJHandler(req,res,next)).
        catch((err)=>{next(err)})
    }

}

export {asyncHandler};

// const asyncHandler=()=>{}
// const asyncHandler=()=>(fun)=>{}
// const asyncHandler=()=>async(fun)=>{}

    
// const asyncHandler=(fn)=>{
//     async(req,res,next)=>{
//         try {
//             await fn(req,res,next);
//         } catch (error) {
//             res.status(err.code ||500).json({
//                 sucess:false,
//                 message:err.message
//             })
//         }
//     }
// };
