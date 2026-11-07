const ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode=statuscode
        this.data=data
        this.message=message
        this.sucess=statuscode<400
    }
}