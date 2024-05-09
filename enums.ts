// Define enum in a separate file (e.g., TicketStatus.ts)
enum TicketStatus {
    INITIALISED,
    CANCELLED,
    PENDING,
    CLOSED
}


const Ticket = {
    id: 1,
    title: "new ticket",
    status: TicketStatus.INITIALISED
}

if (Ticket.status === TicketStatus.INITIALISED) {
    console.log(Ticket.title);
}

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Created = 201,
    BadRequest = 400
}


const respose = {
    url : "www.something.com",
    type:"GET",
    data:"some string",
    status:StatusCodes.Success
}

if(respose.status === StatusCodes.Success){
    console.log(respose);
}
