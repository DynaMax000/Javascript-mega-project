class ApiResponse {
  constructor(statusCode, message = "Request successful") {
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}