class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); //super is constr of Erro class which is inherrited
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor); //we can use fnn of inherited class(Error)   //saare errors ka stack bana dega
  }
}

export default ErrorHandler;
