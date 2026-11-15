const asyncHandler = (requestJHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestJHandler(req, res, next))
            .catch((err) => {
                next(err);
            });
    };
};

export { asyncHandler };