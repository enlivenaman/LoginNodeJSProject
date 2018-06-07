﻿// config for your database
var errorMessage = {
    AUTHENTICATIONFAIL: 'Email Address or Password is invalid.',
    UserDetailError: 'Some issue occured while fething User details.',
    DBQueryExectuionError: "There is some issue in db query",
    USERIDInvalid: 'User ID is not valid',
    HeaderToken: 'Please pass token in a header',
    InternalServerError: 'Internal Server Error',
    UserProfileError: 'Some issue occured while fetching User profile.',
    UnAuthorizeUser: 'You are not an Authorized User.',
    InValidPassword: 'Password is invalid',
    InValidToken: 'Token is invalid',
    RefreshTokeError: 'Issue while refreshing a token',
    RoomError: "Some issue occured while fetching Rooms",
    UnAuthorizeForPortal: "User is not authorized to access admin portal.",
    RoomNotAvailable: "Room is unavailable for the selected time slot ",
    MeetingCreated: "Meeting Created Successfully",
    MeetingUpdated: "Meeting Updated Successfully",
    MeetingAccepted: "Meeting Accepted ",
    MeetingRejected: "Meeting Rejected",
    BuildingDistance: "Issue while finding building distance",
    ExchangeRoomNotAvaiable: "Exchange Room not available",
    UserOrPassWordInvalid: "Email Address or Password is invalid",
    MeetingForwared: "Meeting Forwarded Successfully",
    NoRoomFound: "No Room is available for selected facility or no. of attendees",
    NoRoomAvailableForBook: "No Room available for booking",
    DeviceRegistrationSuccessful: "Device registered successfully ",
    DeviceRegistrationUpdatedSuccessful: "Device registration updated successfully",
    DeviceAlreadyRegister: "Device is already registered",
    NotificationSendSuccessFully: "Notification Sent Successfully",
    NotificationFailure: "Error while sending notification",
    DeviceRegisterError: "Error while device registration",
    ListRegistrationByDeviceTokenError: "Error while fetching already register device with device token",
    DataMissing: "Request data missing",
    DeviceDeRegister: "Device Registration Removed",
    DeviceTokenNotMatch: "Device token has not matched  with given email address",
    RoomNotFound: "Room Not Available",
    SourceBuildingNotFound: 'Source Building Not Found',
    RoomLocation: 'Your Conf. Room is on {FloorName}',
    InvalidLatLong : 'Error while featching direction from google api',
    BuildingNotFoundFromCurrentLocation: 'We are unable to locate nearest building from current location',
    BuildingNotFoundFromPOI: 'We are unable to locate nearest building from POI location',
    MeetingCreatedNotification: '{organizer} wants you to join {meetingsubject}',
    MeetingUpdateNotification: '{organizer} has updated {meetingsubject}',
    MeetingNotificaton: 'Meeting Notification',
    AccessTokenError: 'Issue occurs while generating access token',
    NavigationDataError: "Please pass valid value for floor & building",
}
module.exports = errorMessage;